"use client";
import { MdDownload } from "react-icons/md";

const ExportButton = () => {
  return (
    <button className="flex flex-row items-center justify-center rounded-md gap-1 py-2 px-6 bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB]">
      <MdDownload size={16} />
      <span className="hidden sm:block text-sm">Export</span>
    </button>
  );
};

export default ExportButton;
