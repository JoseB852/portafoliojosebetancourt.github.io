"use client";
import { itemsNavbar } from "@/data";
import Link  from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";

const Navbar = () => {
    const router = usePathname()
  return (
    <MotionTransition position="right" className="fixed bottom-10 z-40 flex w-full flex-col items-center justify-center">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <div
            key={item.id}
            className={`px-3 py-2 rounded-full cursor-pointer transition-colors duration-150
              ${router === item.link ? 'bg-[#FF7F00] text-white' : 'hover:bg-[#FF7F00]'}`}
          >
            <Link href={item.link}>{item.icon}</Link>
          </div>
          
          
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
