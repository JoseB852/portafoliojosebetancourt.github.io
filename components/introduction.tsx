"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="relative z-10 w-full bg-darkBg/60 pointer-events-none">
      <div className="grid items-center h-full p-6 py-20 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width={500}
          height={500}
          alt="Profile pic"
          className="pointer-events-none"
        />

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-[#FF7F00]"
            />
          </h1>

          <p className="mb-2 text-xl">
            Como Desarrollador Full Stack con experiencia en el diseño y
            construcción de aplicaciones web dinámicas y responsivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
