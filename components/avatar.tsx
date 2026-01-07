import MotionTransition from "./transition-component";
import Image from "next/image";

const Avatar = () => {
    return (
        <MotionTransition
            position="bottom"
            className="hidden md:block absolute right-[-30%] bottom-32 z-0 opacity-70 pointer-events-none"
        >
            <Image
                src="/avatar-1.png"
                width={350}
                height={350}
                className="w-full h-auto object-contain"
                alt="Avatar"
            />
        </MotionTransition>

    );
};

export default Avatar;
