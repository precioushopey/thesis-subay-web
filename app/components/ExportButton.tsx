"use client";
import { useState } from "react";
import { MdDownload, MdInsights } from "react-icons/md";

const ExportButton = ({ onExportPDF }: { onExportPDF: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center rounded-md p-1 bg-[var(--brightaqua)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110"
      >
        <MdDownload size={16} className="text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 flex flex-row items-center bg-[var(--background)] rounded-md hover:bg-[var(--softcyan)] dark:hover:bg-[var(--brimagenta)] shadow-lg z-10 text-[var(--bluetext)] dark:text-white cursor-pointer">
          <button
            onClick={() => {
              console.log("Generated Insights!");
              onExportPDF();
              setIsOpen(false);
            }}
            className="block w-full rounded-md text-left pl-4 py-2 text-xs"
          >
            Generate Insights
          </button>
          <div className="rounded-md pr-4">
            <MdInsights size={16} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
