import type { Metadata } from "next";
import { MuseumCamera } from "./MuseumCamera";

export const metadata: Metadata = {
  title: "Museo AR",
  description: "Explora piezas del museo en 3D usando la cámara de tu dispositivo.",
};

export default function Home() {
  return <MuseumCamera />;
}
