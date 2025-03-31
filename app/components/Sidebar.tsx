"use client";
import { JSX, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleThemeButton from "./ToggleThemeButton";
import {
  MdMenu,
  MdHome,
  MdVideocam,
  MdBubbleChart,
  MdAnalytics,
  MdInfo,
} from "react-icons/md";

interface SidebarItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isCollapsed: boolean;
}

const SidebarItem = ({ href, icon, label, isCollapsed }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-4 py-2 hover:bg-[var(--background)] hover:border-l-[10px] hover:border-l-[var(--softcyan)] dark:hover:border-l-[var(--brimagenta)] hover:text-[var(--deepteal)] dark:hover:text-white focus:bg-[var(--background)] focus:text-[var(--softcyan)] dark:focus:text-[var(--brimagenta)] transition-all ease-in-out duration-700"
    >
      {icon}
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative h-screen bg-white dark:bg-[var(--navyblue)] text-[var(--bluetext)] dark:text-[var(--periwinkle)] drop-shadow-2xl font-[family-name:var(--font-prompt)] selection:bg-[var(--elecpurple)] selection:text-white transition-all ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-[var(--bluetext)] dark:border-[var(--periwinkle)]">
        {!isCollapsed && (
          <div className="flex flex-row justify-center items-end gap-2">
            <Image
              src={"/subay.png"}
              alt={"SUBAY Logo"}
              width={100}
              height={100}
            ></Image>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="transform transition duration-500 hover:scale-110 hover:text-[var(--deepteal)] dark:hover:text-white items-end"
        >
          <MdMenu size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4">
        <SidebarItem
          href="/"
          icon={<MdHome size={20} />}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/camera-feed"
          icon={<MdVideocam size={20} />}
          label="Camera Feed"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/heatmap"
          icon={<MdBubbleChart size={20} />}
          label="Heatmap"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/analytics"
          icon={<MdAnalytics size={20} />}
          label="Analytics"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/about"
          icon={<MdInfo size={20} />}
          label="About Us"
          isCollapsed={isCollapsed}
        />
      </nav>
      <div className="absolute bottom-4 right-2">
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Sidebar;
