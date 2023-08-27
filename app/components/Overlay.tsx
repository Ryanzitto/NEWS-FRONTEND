"use client";

import Image from "next/image";

export default function HomeUI() {
  return (
    <main className="flex min-h-screen h-screen justify-center items-center relative overlay">
      <div className="w-full h-full flex"></div>
      <div className="w-[98%] h-[95%] absolute border-[0.5px] border-white/10">
        <header className="h-20 w-full flex justify-start items-center text-white font-bold text-lg">
          <div className="w-1/3 flex flex-col justify-center pl-12 mt-6">
            <span>👋 OLÁ, EU SOU</span>
            <span>RYAN HENRIQUE</span>
          </div>
          <div className="w-1/3 tracking-wide flex justify-center">
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
          </div>
        </header>
        <div className="w-full h-[85%] flex">
          <div className="w-[65%] h-full flex flex-col justify-start ml-10 pt-12">
            <div className="flex w-fit h-fit justify-center flex-col text-6xl text-white font-black gap-2">
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
                experiências de usuario incríveis, agradáveis, escaláveis <br />
                e performáticas. Busco o crescimento profissional e pessoal.
              </p>
              <p>
                possuo habilidade de adaptabilidade, comunicação clara,
                <br /> e uma intensa vontade de aprender.
              </p>
              <p>Que tal trabalharmos juntos? 😄</p>
            </div>
          </div>
          <div className="w-[35%] h-full flex flex-col justify-center items-center">
            <div className="w-[350px] h-[450px]"></div>
            <div className="w-[350px] h-12 flex justify-end gap-4 mr-4 mt-2">
              <div className="cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
                  target="blank"
                >
                  <Image
                    width={30}
                    height={30}
                    src={"/images/logotipo-do-linkedin.png"}
                    alt="logo da empresa linkedin"
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="https://github.com/Ryanzitto" target="blank">
                  <Image
                    width={30}
                    height={30}
                    src={"/images/placa-do-github.png"}
                    alt="logo da empresa github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
