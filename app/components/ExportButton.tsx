"use client";
import { useState } from "react";
import { MdDownload, MdInsights } from "react-icons/md";

const ExportButton = ({ onExportPDF }: { onExportPDF: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          console.log("Generated Insights!");
          onExportPDF();
          setIsOpen(false);
        }}
        className="flex flex-row items-center justify-center rounded-md px-4 py-2 bg-[var(--brightaqua)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110"
      >
        <span className="text-[var(--bluetext)] dark:text-white text-xs font-semibold dark:font-medium mr-2">
          Generate Insights
        </span>
        <MdInsights size={16} />
      </button>
    </div>
  );
};

export default ExportButton;
