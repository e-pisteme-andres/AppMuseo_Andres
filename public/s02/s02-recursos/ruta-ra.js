/* Rótulo de identificación para los instrumentos de S-02. Desechable.
 *
 * Existe para que UNA CAPTURA DE PANTALLA SE EXPLIQUE SOLA: qué móvil, qué
 * navegador, qué ruta de RA y por qué. Sin eso, una medición no se puede ni
 * repetir ni discutir.
 *
 * Da dos cosas distintas y conviene no confundirlas:
 *
 *   · RUTA PREVISTA  — se calcula replicando la lógica de model-viewer 4.3.1
 *                      (lib/constants.js y lib/features/ar.js). Es una
 *                      predicción, y está disponible antes de tocar nada.
 *   · RUTA CONFIRMADA— se lee de lo que la propia biblioteca escribe en la
 *                      consola al lanzar la RA («Attempting to present in AR
 *                      with …»). Es la verdad, y solo llega al pulsar.
 *
 * Si las dos no coinciden, el rótulo lo dice en rojo: significa que esta réplica
 * se ha quedado vieja respecto a la biblioteca, y eso es un hallazgo.
 */
(function (global) {
  'use strict';

  var ua = navigator.userAgent || navigator.vendor || '';

  // --- Réplica de lib/constants.js de model-viewer 4.3.1 ---------------------
  var IS_ANDROID = /android/i.test(ua);
  var IS_FIREFOX = /firefox/i.test(ua);
  var IS_OCULUS  = /OculusBrowser/.test(ua);
  var IS_IOS = (/iPad|iPhone|iPod/.test(ua) && !global.MSStream) ||
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var IS_IOS_THIRDPARTY = IS_IOS && /CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(ua);
  var IS_IOS_GSA        = IS_IOS && /GSA\//.test(ua);

  var HAS_WEBXR_HIT_TEST = navigator.xr != null && global.XRSession != null &&
      navigator.xr.isSessionSupported != null &&
      global.XRSession.prototype.requestHitTestSource != null;

  var IS_SCENEVIEWER_CANDIDATE = IS_ANDROID && !IS_FIREFOX && !IS_OCULUS;
  var IS_AR_QUICKLOOK_CANDIDATE = (function () {
    if (!IS_IOS) return false;
    if (IS_IOS_THIRDPARTY) return true;
    var a = document.createElement('a');
    return Boolean(a.relList && a.relList.supports && a.relList.supports('ar'));
  })();

  // --- Etiqueta corta del dispositivo, para que la captura se identifique ----
  function etiquetaDispositivo() {
    var m;
    if (IS_IOS) {
      m = /OS (\d+)[._](\d+)/.exec(ua);
      return (/iPad/.test(ua) ? 'iPad' : 'iPhone') + (m ? ' · iOS ' + m[1] + '.' + m[2] : '');
    }
    if (IS_ANDROID) {
      var ver = /Android (\d+(?:\.\d+)?)/.exec(ua);
      // El modelo va entre «; » y « Build» o el paréntesis de cierre.
      var mod = /;\s*([^;)]+?)\s*(?:Build\/|\))/.exec(ua.split('Android')[1] || '');
      return (mod ? mod[1] : 'Android') + (ver ? ' · Android ' + ver[1] : '');
    }
    return 'Escritorio';
  }

  function etiquetaNavegador() {
    if (IS_IOS_GSA) return 'app de Google (iOS)';
    if (/CriOS\//.test(ua)) return 'Chrome (iOS)';
    if (/EdgiOS\//.test(ua)) return 'Edge (iOS)';
    if (/FxiOS\//.test(ua)) return 'Firefox (iOS)';
    if (/DuckDuckGo\//.test(ua)) return 'DuckDuckGo (iOS)';
    if (IS_IOS) return 'Safari';
    if (/SamsungBrowser\/([\d.]+)/.test(ua)) return 'Samsung Internet ' + RegExp.$1;
    if (/EdgA?\/([\d.]+)/.test(ua)) return 'Edge ' + RegExp.$1.split('.')[0];
    if (IS_FIREFOX) return 'Firefox';
    if (/Chrome\/([\d.]+)/.test(ua)) return 'Chrome ' + RegExp.$1.split('.')[0];
    return 'desconocido';
  }

  /* Calcula la ruta prevista. Recorre los modos en el mismo orden que
     $selectARMode y gana el primero que cumple. `soportaXR` es el resultado de
     navigator.xr.isSessionSupported('immersive-ar'), que es asíncrono: hasta que
     llega se pasa null y la respuesta queda «consultando». */
  function calcular(soportaXR, modos) {
    var lista = (modos || 'webxr scene-viewer quick-look').trim().split(/\s+/);
    for (var i = 0; i < lista.length; i++) {
      var m = lista[i];
      if (m === 'webxr' && HAS_WEBXR_HIT_TEST) {
        if (soportaXR === null) return { modo: '…', motivo: 'Preguntando al sistema si admite immersive-ar.' };
        if (soportaXR === true) return {
          modo: 'webxr',
          motivo: 'RA dentro de la propia página. Emite eventos, se puede cronometrar, ' +
                  'y usa el modelo ya cargado: funciona sin red.'
        };
      }
      if (m === 'scene-viewer' && IS_SCENEVIEWER_CANDIDATE) return {
        modo: 'scene-viewer',
        motivo: 'Se abre la app Scene Viewer de Android. Elegida SOLO por la cadena de ' +
                'agente, sin comprobar ninguna capacidad. No emite eventos y se descarga ' +
                'el modelo ella misma: necesita red.'
      };
      if (m === 'quick-look' && IS_AR_QUICKLOOK_CANDIDATE && !IS_IOS_GSA &&
          (!IS_IOS_THIRDPARTY || document.querySelector('model-viewer[ios-src]'))) return {
        modo: 'quick-look',
        motivo: IS_IOS_THIRDPARTY
          ? 'AR Quick Look del sistema, con el .usdz de ios-src. En este navegador el ' +
            'USDZ generado al vuelo no vale.'
          : 'AR Quick Look del sistema. Sin ios-src, el .usdz se genera en este mismo ' +
            'móvil al pulsar, y eso tarda.'
      };
    }
    var porQueNo = IS_IOS_GSA
      ? 'La app de Google en iOS nunca abre Quick Look.'
      : (IS_IOS_THIRDPARTY
          ? 'Navegador de terceros en iOS sin ios-src: no hay RA posible.'
          : (IS_ANDROID && IS_FIREFOX
              ? 'Firefox en Android queda fuera de Scene Viewer por decisión de la biblioteca.'
              : 'Ni WebXR, ni Scene Viewer, ni Quick Look.'));
    return {
      modo: 'ninguna',
      motivo: porQueNo + ' El botón «Ver en RA» no debe aparecer: se queda el visor 3D ' +
              'orbital, que es el nivel 2 y es contenido, no consuelo.'
    };
  }

  var COLOR = { webxr: '#6f6', 'scene-viewer': '#fc6', 'quick-look': '#6cf',
                ninguna: '#f77', '…': '#999' };

  /* El estilo va aquí y no en cada página para que el rótulo sea idéntico en las
     tres: si sale en una captura, tiene que verse igual venga de donde venga. */
  var estilo = document.createElement('style');
  estilo.textContent =
    '.rotulo{border:2px solid #555;padding:8px;margin:0 0 10px;background:#0b0b0b}' +
    '.rot-cab{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}' +
    '.rot-ruta{font-size:22px;font-weight:bold;letter-spacing:.02em}' +
    '.rot-disp{font-size:12px;color:#ccc;text-align:right}' +
    '.rot-motivo{font-size:12px;color:#bbb;margin-top:4px;line-height:1.4}' +
    '.rot-conf{font-size:11px;color:#888;margin-top:6px}' +
    '.rot-pie{font-size:10px;color:#777;margin-top:6px;border-top:1px solid #222;padding-top:4px}';
  (document.head || document.documentElement).appendChild(estilo);

  /* Pinta el rótulo dentro de `destino` y lo mantiene al día.
     opciones.elemento — el <model-viewer>, si la página tiene uno. */
  function rotulo(destino, opciones) {
    opciones = opciones || {};
    var caja = typeof destino === 'string' ? document.getElementById(destino) : destino;
    if (!caja) return null;
    var estado = { prevista: null, confirmada: null };

    function pintar() {
      var p = estado.prevista || { modo: '…', motivo: '' };
      var discrepa = estado.confirmada && estado.confirmada !== p.modo;
      caja.innerHTML =
        '<div class="rot-cab">' +
          '<span class="rot-ruta" style="color:' + (COLOR[p.modo] || '#eee') + '">' +
            (estado.confirmada || p.modo) + '</span>' +
          '<span class="rot-disp">' + etiquetaDispositivo() + ' · ' + etiquetaNavegador() + '</span>' +
        '</div>' +
        '<div class="rot-motivo">' + p.motivo + '</div>' +
        (estado.confirmada
          ? '<div class="rot-conf">Confirmado al pulsar: la biblioteca ha usado <b>' +
            estado.confirmada + '</b>' +
            (discrepa ? ' — <b style="color:#f77">y la previsión decía ' + p.modo +
                        '. Esta réplica se ha quedado vieja: anótalo.</b>' : '.') + '</div>'
          : '<div class="rot-conf">Previsión. Se confirmará al pulsar «Ver en RA».</div>') +
        '<div class="rot-pie">' +
          (self.isSecureContext ? '' : '<b style="color:#f77">SIN CONTEXTO SEGURO — no habrá ni cámara ni RA. ' +
            'Estás en http; hace falta el túnel HTTPS.</b><br>') +
          screen.width + '×' + screen.height + ' · DPR ' + (devicePixelRatio || 1) +
          ' · ventana ' + innerWidth + '×' + innerHeight +
          ' · ' + new Date().toLocaleString('es-ES') +
        '</div>';
    }

    function recalcular() {
      var modos = opciones.elemento ? opciones.elemento.getAttribute('ar-modes') : null;
      estado.prevista = calcular(null, modos);
      pintar();
      if (navigator.xr && navigator.xr.isSessionSupported) {
        navigator.xr.isSessionSupported('immersive-ar').then(function (ok) {
          estado.prevista = calcular(ok, modos); pintar();
        }).catch(function () { estado.prevista = calcular(false, modos); pintar(); });
      } else {
        estado.prevista = calcular(false, modos); pintar();
      }
    }

    /* La ruta CONFIRMADA se pesca de la consola: la biblioteca escribe
       «Attempting to present in AR with …» justo antes de lanzar cada una. Es
       feo, y es la única forma de saberlo desde fuera: el modo elegido vive en
       una propiedad de símbolo, sin API pública. */
    var logOriginal = console.log;
    console.log = function () {
      var t = Array.prototype.join.call(arguments, ' ');
      if (t.indexOf('Attempting to present in AR with') !== -1) {
        estado.confirmada = /Scene Viewer/.test(t) ? 'scene-viewer'
                          : /Quick Look/.test(t) ? 'quick-look'
                          : /WebXR/.test(t) ? 'webxr' : null;
        if (opciones.alConfirmar) opciones.alConfirmar(estado.confirmada);
        pintar();
      }
      return logOriginal.apply(console, arguments);
    };

    recalcular();
    addEventListener('orientationchange', function () { setTimeout(pintar, 300); });
    return { recalcular: recalcular, estado: estado };
  }

  global.RutaRA = {
    calcular: calcular,
    rotulo: rotulo,
    dispositivo: etiquetaDispositivo,
    navegador: etiquetaNavegador,
    señales: {
      IS_ANDROID: IS_ANDROID, IS_IOS: IS_IOS, IS_FIREFOX: IS_FIREFOX,
      IS_IOS_THIRDPARTY: IS_IOS_THIRDPARTY, IS_IOS_GSA: IS_IOS_GSA,
      IS_SCENEVIEWER_CANDIDATE: IS_SCENEVIEWER_CANDIDATE,
      IS_AR_QUICKLOOK_CANDIDATE: IS_AR_QUICKLOOK_CANDIDATE,
      HAS_WEBXR_HIT_TEST: HAS_WEBXR_HIT_TEST
    },
    ua: ua
  };
})(window);
