"use client";

import "./globals.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const baseUrl = "http://localhost:4000";
  useEffect(() => {
    axios
      .get(`${baseUrl}/news/`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex flex-col min-h-screen h-screen bg-zinc-300 justify-start items-start">
      <div className="w-full h-8 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      <div className="w-full h-[500px] flex p-10 gap-4">
        <div className="w-1/2 flex justify-center items-center">
          <div
            style={{
              backgroundImage: `url("https://s2-g1.glbimg.com/M7W9C5zFKjOdWxMFnUPoNrB0BdI=/0x506:4855x3237/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/f/G/M10bFyS86PZyUvwmKNEQ/2023-09-27t085124z-1672005511-rc2wg3ar5ir1-rtrmadp-3-israel-politics.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-full bg-white rounded-md border border-slate-200"
          ></div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 justify-center items-center">
          <div className="w-full h-1/2 bg-white rounded-md border border-slate-200"></div>
          <div className="w-full h-1/2  bg-white rounded-md border border-slate-200">
            <h1>2</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
