"use client";
import { JSX, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleThemeButton from "./ToggleThemeButton";
import {
  MdMenu,
  MdHome,
  MdSpaceDashboard,
  MdVideocam,
  MdBubbleChart,
  MdInsights,
  MdInfo,
} from "react-icons/md";

type SidebarItemProps = {
  href: string;
  icon: JSX.Element;
  label: string;
  isCollapsed: boolean;
};

const SidebarItem = ({ href, icon, label, isCollapsed }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-4 py-2 hover:bg-[var(--background)] hover:border-l-[10px] hover:border-l-[var(--brightaqua)] dark:hover:border-l-[var(--brimagenta)] hover:text-[var(--deepteal)] dark:hover:text-white focus:bg-[var(--background)] focus:text-[var(--brightaqua)] dark:focus:text-[var(--brimagenta)] transition-all ease-in-out duration-700"
    >
      {icon}
      {!isCollapsed && (
        <span className="font-semibold dark:font-medium text-sm">{label}</span>
      )}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    handleResize();
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
          <a
            href="../dashboard"
            className="flex flex-row justify-center items-end gap-2"
          >
            <Image
              src={"/subay.png"}
              alt={"SUBAY Logo"}
              width={100}
              height={100}
            />
          </a>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="transform transition duration-500 hover:scale-110 hover:text-[var(--deepteal)] dark:hover:text-white items-end"
        >
          <MdMenu size={20} />
        </button>
      </div>

      <nav className="mt-4">
        <SidebarItem
          href="../dashboard"
          icon={<MdHome size={20} />}
          label="Home"
          isCollapsed={isCollapsed}
        />
        {!isCollapsed && (
          <h1 className="text-[var(--brightaqua)] dark:text-white font-semibold dark:font-medium text-sm pl-4 py-2">
            Real-Time Analysis
          </h1>
        )}
        <SidebarItem
          href="../dashboard/live-analytics"
          icon={<MdVideocam size={20} />}
          label="Live Analytics"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="../dashboard/heatmapping"
          icon={<MdBubbleChart size={20} />}
          label="Heat Mapping"
          isCollapsed={isCollapsed}
        />
        {!isCollapsed && (
          <h1 className="hidden lg:block text-[var(--brightaqua)] dark:text-white font-semibold dark:font-medium text-sm pl-4 py-2">
            Post-Event Analysis
          </h1>
        )}
        <SidebarItem
          href="../dashboard/post-analytics"
          icon={<MdSpaceDashboard size={20} />}
          label="Post Analytics"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="../dashboard/insights"
          icon={<MdInsights size={20} />}
          label="Insights"
          isCollapsed={isCollapsed}
        />
        {!isCollapsed && (
          <h1 className="text-[var(--brightaqua)] dark:text-white font-semibold dark:font-medium text-sm pl-4 py-2">
            Others
          </h1>
        )}
        <SidebarItem
          href="../dashboard/about"
          icon={<MdInfo size={20} />}
          label="About Us"
          isCollapsed={isCollapsed}
        />
      </nav>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Sidebar;
