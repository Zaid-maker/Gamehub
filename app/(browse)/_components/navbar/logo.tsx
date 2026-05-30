import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:scale-105 transition-transform">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <Image src="/spooky.svg" alt="gamehub" height="32" width="32" />
        </div>
        <div className={cn(font.className, "hidden lg:block")}>
          <p className="text-xl font-bold tracking-tight text-white">Gamehub</p>
          <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-[0.2em] -mt-1">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};
