"use client";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <div className="w-full flex flex-row items-center justify-between p-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white">
      <div className="flex-col hidden lg:block">
        <h1 className="font-bold text-[var(--bluetext)] dark:text-white text-lg">
          SUBAY: A Multi-Camera Detection System for Customer Tracking
        </h1>
        <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-xs">
          An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon
        </h1>
      </div>
      <div className="relative flex flex-row items-center justify-center gap-2">
        <MdOutlineAdminPanelSettings
          size={40}
          className="text-[var(--bluetext)] dark:text-white"
        />
        <div className="hidden sm:block flex-col">
          <p className="font-semibold text-[var(--bluetext)] dark:text-white text-base">
            Manager
          </p>
          <p className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-xs">
            Administrator
          </p>
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
              className="w-full text-left px-4 py-2 text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
