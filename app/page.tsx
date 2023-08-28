"use client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/experiense";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen bg-zinc-900 justify-center items-center">
      <div className="w-[70%] h-full flex flex-col pl-6">
        <header className="h-32 w-full flex justify-start items-end text-white font-bold text-lg">
          <div className="flex flex-col justify-center pl-20">
            <span>👋 OLÁ, EU SOU</span>
            <span>RYAN HENRIQUE</span>
          </div>
        </header>
        <div className="w-full h-full flex flex-col justify-start pl-16 pt-12">
          <div className="flex w-fit h-fit justify-center flex-col text-7xl text-white font-black gap-2">
            <div className="italic ml-2">
              <h1>DESENVOLVEDOR</h1>
            </div>
            <div className="flex gap-10">
              <div className="italic">
                <h1>WEB</h1>
              </div>
              <div>
                <h1 className="text-[#B30DEE] tracking-wide">FRONT-END</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 ml-2 text-lg w-[65%] text-white font-medium pt-8">
            <p>
              Sou um jovem desenvolvedor muito criativo, interessado em criar
              experiências de usuario incríveis, agradáveis, escaláveis <br />e
              performáticas. Busco o crescimento profissional e pessoal.
            </p>
            <p>
              possuo habilidade de adaptabilidade, comunicação clara,
              <br /> e uma intensa vontade de aprender.
            </p>
            <p>Que tal trabalharmos juntos? 😄</p>
          </div>
        </div>
      </div>

      <div className="w-[30%] h-full bg-gradient-to-b from-[#B30DEE] text-sm text-white font-bold">
        <header className="w-full tracking-wide flex justify-center pt-6">
          <ul className="flex gap-6">
            <li className="cursor-pointer">
              <a>HOME</a>
            </li>
            <li className="cursor-pointer">
              <a>STACK</a>
            </li>
            <li className="cursor-pointer">
              <a>EXPERIENCE</a>
            </li>
          </ul>
        </header>
        <div className="w-full flex justify-center">
          <div className="w-3/4 h-[450px] bg-green-500 mt-12">
            <Canvas>
              <Experience />
            </Canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
