"use client"
import MotionTransition from "./transition-component"
import Image from "next/image";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 md:inline-block md:absolute
                 w-[120px] h-[120px] md:w-[250] md:h-[200px]"
    >
      <Image
        src="/avatar-works.png"
        fill
        className="object-contain"
        alt="Avatar portfolio"
      />
    </MotionTransition>
  )
}

export default AvatarPortfolio
