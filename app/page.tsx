import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center gap-10 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <>
        <Image
          src="/light_logo.png"
          alt="Shop Logo"
          width={200}
          height={200}
          className="block dark:hidden"
        />
        <Image
          src="/dark_logo.png"
          alt="Shop Logo"
          width={200}
          height={200}
          className="hidden dark:block"
        />
      </>
      <div className="flex flex-col">
        <div className="flex gap-1.5">
          <h1 className="text-6xl font-bold italic">SUBAY</h1>
          <h1 className="text-6xl font-bold text-[var(--deepteal)] dark:text-[var(--cyanblue)]">
            .
          </h1>
          <h1 className="text-6xl font-bold text-[var(--brightaqua)] dark:text-[var(--brimagenta)]">
            .
          </h1>
          <h1 className="text-6xl font-bold text-[var(--softblue)] dark:text-[var(--elecpurple)]">
            .
          </h1>
        </div>
        <h1 className="text-xl font-semibold">
          A Multi-Camera Detection System for Customer Tracking
        </h1>
        <h1 className="text-[var(--brightaqua)] dark:text-[var(--periwinkle)] italic text-sm font-semibold dark:font-medium">
          An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon
        </h1>
        <Link
          href="/login"
          className="button w-fit rounded-full transform transition duration-500 hover:scale-110 font-semibold py-2 px-10 mt-8"
        >
          Log In Here
        </Link>
      </div>
    </main>
  );
}
