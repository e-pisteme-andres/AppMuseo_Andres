[CmdletBinding()]
param(
  [string]$Branch = "",
  [int]$Port = 5173,
  [ValidateSet("localtunnel", "cloudflared", "ngrok", "none")]
  [string]$Tunnel = "localtunnel",
  [switch]$NoInstall
)

$ErrorActionPreference = "Stop"

function Get-PnpmCommand {
  $command = Get-Command pnpm.cmd -ErrorAction SilentlyContinue
  if (-not $command) {
    $command = Get-Command pnpm -ErrorAction Stop
  }

  return $command.Source
}

function Test-PortInUse {
  param([int]$PortToCheck)

  $client = New-Object System.Net.Sockets.TcpClient
  try {
    $pending = $client.BeginConnect("127.0.0.1", $PortToCheck, $null, $null)
    $connected = $pending.AsyncWaitHandle.WaitOne(200)
    if ($connected) {
      $client.EndConnect($pending)
      return $true
    }

    return $false
  }
  catch {
    return $false
  }
  finally {
    $client.Close()
  }
}

function Get-FreePort {
  param([int]$PreferredPort)

  $candidate = $PreferredPort
  while (Test-PortInUse -PortToCheck $candidate) {
    $candidate += 1
  }

  return $candidate
}

function Get-SafeWorktreeName {
  param([string]$Name)

  $safeName = ($Name -replace '[^a-zA-Z0-9._-]', '-').Trim("-")
  if ([string]::IsNullOrWhiteSpace($safeName)) {
    throw "La rama '$Name' no se puede convertir en un nombre de carpeta valido."
  }

  return $safeName
}

function Get-LanUrls {
  param([int]$ServerPort)

  try {
    $addresses = Get-NetIPAddress -AddressFamily IPv4 |
      Where-Object {
        $_.IPAddress -ne "127.0.0.1" -and
        $_.IPAddress -notlike "169.254.*" -and
        $_.IPAddress -notlike "172.17.*"
      } |
      Select-Object -ExpandProperty IPAddress -Unique

    return $addresses | ForEach-Object { "http://$($_):$ServerPort/" }
  }
  catch {
    return @()
  }
}

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$workDir = $repoRoot

if (-not [string]::IsNullOrWhiteSpace($Branch)) {
  $worktreeRoot = Join-Path $repoRoot ".worktrees"
  $safeBranchName = Get-SafeWorktreeName -Name $Branch
  $workDir = Join-Path $worktreeRoot $safeBranchName

  if (-not (Test-Path $worktreeRoot)) {
    New-Item -ItemType Directory -Path $worktreeRoot | Out-Null
  }

  if (-not (Test-Path $workDir)) {
    & git -C $repoRoot show-ref --verify --quiet "refs/heads/$Branch"
    if ($LASTEXITCODE -eq 0) {
      Write-Host "Creando worktree para la rama existente '$Branch'..."
      & git -C $repoRoot worktree add $workDir $Branch
    }
    else {
      Write-Host "Creando rama y worktree '$Branch'..."
      & git -C $repoRoot worktree add -b $Branch $workDir
    }

    if ($LASTEXITCODE -ne 0) {
      throw "No se pudo preparar el worktree de '$Branch'."
    }
  }
  else {
    Write-Host "Usando worktree existente: $workDir"
  }
}

$Port = Get-FreePort -PreferredPort $Port
$pnpm = Get-PnpmCommand

if (-not $NoInstall -and -not (Test-Path (Join-Path $workDir "node_modules"))) {
  Write-Host "Instalando dependencias en $workDir..."
  & $pnpm install --dir $workDir
  if ($LASTEXITCODE -ne 0) {
    throw "La instalacion de dependencias ha fallado."
  }
}

$previousBasePath = $env:VITE_BASE_PATH
$env:VITE_BASE_PATH = "/"
$viteArgs = @("exec", "vite", "--host", "0.0.0.0", "--port", $Port.ToString(), "--strictPort")
$viteProcess = $null

try {
  Write-Host "Levantando Vite en $workDir..."
  $viteProcess = Start-Process -FilePath $pnpm -ArgumentList $viteArgs -WorkingDirectory $workDir -NoNewWindow -PassThru
  Start-Sleep -Seconds 3

  if ($viteProcess.HasExited) {
    throw "Vite se cerro antes de tiempo. Ejecuta pnpm dev:local para ver el error completo."
  }

  Write-Host ""
  Write-Host "Servidor local: http://localhost:$Port/"
  foreach ($url in (Get-LanUrls -ServerPort $Port)) {
    Write-Host "Misma Wi-Fi: $url"
  }
  Write-Host ""

  switch ($Tunnel) {
    "localtunnel" {
      Write-Host "Abriendo tunel HTTPS con localtunnel..."
      Write-Host "Cuando aparezca 'your url is', abre ese enlace en el telefono."
      & $pnpm dlx localtunnel --port $Port --local-host 127.0.0.1
    }
    "cloudflared" {
      Write-Host "Abriendo tunel HTTPS con cloudflared..."
      & $pnpm dlx cloudflared tunnel --url "http://localhost:$Port"
    }
    "ngrok" {
      Write-Host "Abriendo tunel HTTPS con ngrok..."
      & ngrok http $Port
    }
    "none" {
      Write-Host "Tunel desactivado. Pulsa Ctrl+C para parar el servidor."
      while ($true) {
        Start-Sleep -Seconds 3600
      }
    }
  }
}
finally {
  if ($null -ne $viteProcess -and -not $viteProcess.HasExited) {
    Stop-Process -Id $viteProcess.Id -Force
  }

  $env:VITE_BASE_PATH = $previousBasePath
}
