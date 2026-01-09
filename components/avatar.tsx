import MotionTransition from "./transition-component";
import Image from "next/image";

const Avatar = () => {
    return (
        <MotionTransition
        position="bottom"
        className="hidden md:block absolute right-[-30%] bottom-32 z-0 opacity-70 pointer-events-none
                   w-[750px] h-[300]"
      >
        <Image
          src="/avatar-1.png"
          fill
          className="object-contain"
          alt="Avatar"
        />
      </MotionTransition>
      

    );
};

export default Avatar;
