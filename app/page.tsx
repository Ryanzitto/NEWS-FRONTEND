import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen justify-center items-center">
      <div className="w-full h-full flex">
        <div className="bg-[#1A1A1A] w-3/4 h-full"></div>
        <div className="bg-[#B30DEE] w-1/4 h-full"></div>
      </div>
      <div className="w-[95%] h-[90%] absolute border-[0.5px] border-white/10">
        <header className="h-20 w-full flex justify-between items-center text-white font-bold text-xl">
          <div className="w-[200px] ml-14 pt-10">
            <span>👋 OLÁ, EU SOU RYAN HENRIQUE</span>
          </div>
          <div className="mr-40 pt-6">
            <ul className="flex gap-6">
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>STACK</a>
              </li>
              <li>
                <a>EXPERIENCE</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="w-full h-[85%] flex bg-pink">
          <div className="w-[60%] h-full flex flex-col justify-start ml-10 pt-8">
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
            <div className="flex flex-col gap-6 ml-2 text-lg w-[90%] text-white font-medium pt-6">
              <p>
                Sou um jovem desenvolvedor muito criativo, interessado em criar
                experiências de usuario incríveis, agradáveis, escaláveis e
                performáticas. Busco o crescimento profissional e pessoal.
              </p>

              <p>
                possuo habilidade de adaptabilidade, comunicação clara, e uma
                intensa vontade de aprender.
              </p>

              <p>Que tal trabalharmos juntos? 😄</p>
            </div>
          </div>
          <div className="bg-blue-500 w-[40%] h-full">
            <div cl></div>
          </div>
        </div>
      </div>
    </main>
  );
}
