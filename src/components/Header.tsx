"use client";

import localFont from "next/font/local";
const domino = localFont({ src: "./fonts/domino.ttf" });

export default function Header({ text }: { text: string }) {
  return (
    <header
      className={`${domino.className} relative text-[12vw] leading-none tracking-tighter text-primary transition-colors duration-700 ease-in-out lg:text-9xl dark:text-background`}
    >
      {text}
      <div
        className={`${domino.className} absolute top-0 -z-10 leading-none blur-[5px]`}
      >
        {text}
      </div>
    </header>
  );
}
