"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link";



const Introduction = () => {
    return (

        <div className=" z-20 w-full bg-darkBg/60">

            <div className="z-20 grid items-center h-full p-6 py-20 med:pey-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="500" height="500" alt="Profile pic" />

                <div className="flex flex-col justify-center max-w.md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> Si puedes pensarlo
                        <TypeAnimation
                            sequence={[
                                "puedes progarmarlo",
                                1000,
                                "puedes optimizarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-[#FF7F00]"
                        />
                    </h1>

                    <p className="mx-auyo mb-2 text-xl md:mx-0 md:mb-8">
                        Como desarrollador fronted, me dedico a combinar diseño y funcionalidad para crear experiencias digitales accesibles.
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">

                        <Link href="/pojects" className=" px-3 py-2 transition-all border-2 cursoe-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link href="/contacto" className=" px-3 py-2 transition-all border-2 cursoe-pointer text-[#FF7F00] border-[#FF7F00] text-md w-fit rounded-xl hover:shadow-xl hover:shadow-[#FF7F00]">
                            Contacta conmigo
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Introduction