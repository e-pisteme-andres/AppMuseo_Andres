import type { Metadata } from "next";
import { MuseumCamera } from "./MuseumCamera";

export const metadata: Metadata = {
  title: "Museo AR",
  description: "Coloca piezas 3D del museo sobre una superficie real usando la cámara.",
};

export default function Home() {
  return <MuseumCamera />;
}
