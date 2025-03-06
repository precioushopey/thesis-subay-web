"use client";
import { useState } from "react";
import { MdDownload } from "react-icons/md";

const ExportButton = ({
  onExportCSV,
  onExportPNG,
}: {
  onExportCSV: () => void;
  onExportPNG: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center rounded-md p-1 bg-[#CB3CFF] transform transition duration-500 hover:scale-110 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white"
      >
        <MdDownload size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-[#081028] rounded-md shadow-lg z-10">
          <button
            onClick={() => {
              onExportCSV();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-xs text-white hover:bg-[#CB3CFF] rounded-t-md"
          >
            Export as CSV
          </button>
          <button
            onClick={() => {
              onExportPNG();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-xs text-white hover:bg-[#CB3CFF] rounded-b-md"
          >
            Export as PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
