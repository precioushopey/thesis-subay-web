"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import ExportButton from "./ExportButton";
import { auth } from "@/app/firebase/config";
import { usePathname, useRouter } from "next/navigation";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="w-full flex flex-row items-center justify-between p-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white">
      <div className="flex-col hidden lg:block">
        <h1 className="font-bold text-[var(--bluetext)] dark:text-white text-lg">
          SUBAY: A Multi-Camera Detection System for Customer Tracking
        </h1>
        <h1 className="descriptions text-xs">
          An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon
        </h1>
      </div>
      <div className="relative flex flex-row items-center justify-center gap-4">
        {path === "/dashboard/insights" && <ExportButton />}
        <>
          <Image
            src="/light_logo.png"
            alt="Shop Logo"
            width={40}
            height={40}
            className="block dark:hidden"
          />
          <Image
            src="/dark_logo.png"
            alt="Shop Logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
        </>
        <div className="hidden sm:block flex-col">
          <p className="font-semibold text-[var(--bluetext)] dark:text-white text-base">
            Manager
          </p>
          <p className="descriptions text-xs">Administrator</p>
        </div>
        <div
          className="rounded-full hover:bg-[var(--softcyan)] dark:hover:bg-[var(--brimagenta)] p-1 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? (
            <MdOutlineKeyboardArrowUp
              size={20}
              className="text-[var(--bluetext)] dark:text-white"
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              size={20}
              className="text-[var(--bluetext)] dark:text-white"
            />
          )}
        </div>
        {isDropdownOpen && (
          <div className="absolute sm:top-12 sm:right-0 sm:left-0 top-0 right-0 left-18 w-46 z-50 bg-white dark:bg-[var(--navyblue)] hover:bg-[var(--softcyan)] dark:hover:bg-[var(--brimagenta)] border border-[var(--deepteal)] dark:border-[var(--periwinkle)] rounded-md shadow-lg text-xs">
            <button
              onClick={handleLogout}
              className="header-text w-full text-left px-4 py-2 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
