"use client";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Experience } from "./components/experiense";
import HomeUI from "./components/Overlay";
export default function Home() {
  return (
    <main className="flex min-h-screen h-screen bg-zinc-900 justify-end">
      <div className="w-1/3">
        <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
          <Experience />
        </Canvas>
      </div>

      <HomeUI />
    </main>
  );
}
