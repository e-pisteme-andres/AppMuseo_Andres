import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Museo AR",
  description: "Visor minimalista de piezas 3D con cámara para visitantes de museo.",
  openGraph: {
    title: "Museo AR",
    description: "Explora piezas en 3D usando la cámara de tu teléfono.",
    images: [{ url: "/og.png", width: 1664, height: 960 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Museo AR",
    description: "Explora piezas en 3D usando la cámara de tu teléfono.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
