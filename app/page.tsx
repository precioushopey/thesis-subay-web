import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-row items-center justify-center gap-10 font-[family-name:var(--font-prompt)] selection:bg-[var(--elecpurple)] selection:text-white text-white">
      <Image src="/favicon.png" alt="logo" width={220} height={220} />
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-1.5">
          <h1 className="text-6xl font-bold italic">SUBAY</h1>
          <h1 className="text-6xl font-bold text-[var(--cyanblue)]">.</h1>
          <h1 className="text-6xl font-bold text-[var(--brimagenta)]">.</h1>
          <h1 className="text-6xl font-bold text-[var(--elecpurple)]">.</h1>
        </div>
        <h1 className="text-xl font-semibold">
          A Multi-Camera Detection System for Customer Tracking
        </h1>
        <h1 className="text-[var(--periwinkle)] italic text-sm font-medium">
          An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon
        </h1>
        <Link
          href="/login"
          className="w-fit rounded-full transform transition duration-500 hover:scale-110 bg-[var(--brimagenta)] hover:bg-[var(--purgenta)] font-semibold text-white text-sm py-2 px-10 mt-8"
        >
          Log In Here
        </Link>
      </div>
    </main>
  );
}
