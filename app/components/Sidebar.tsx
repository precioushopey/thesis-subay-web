"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className="flex items-center gap-4 px-4 py-2 hover:bg-[#081028] hover:border-l-[10px] hover:border-l-[#CB3CFF] hover:text-white focus:bg-[#081028] focus:text-[#CB3CFF] transition-all ease-in-out duration-700"
    >
      {icon}
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-[#0B1739] text-[#AEB9E1] drop-shadow-2xl font-[family-name:var(--font-prompt)] transition-all ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between p-4 border-b border-[#AEB9E1]">
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
          className="items-end"
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
    </div>
  );
};

export default Sidebar;
