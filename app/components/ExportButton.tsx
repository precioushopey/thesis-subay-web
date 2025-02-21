"use client";
import { MdDownload } from "react-icons/md";

const ExportButton = () => {
  return (
    <button className="flex flex-row items-center justify-center rounded-md gap-1 px-4 py-2 bg-[#CB3CFF] transform transition duration-500 hover:scale-110 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      <MdDownload size={16} />
      <span className="hidden sm:block text-xs">Export</span>
    </button>
  );
};

export default ExportButton;
