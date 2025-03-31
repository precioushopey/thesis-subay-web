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
        className="flex flex-row items-center justify-center rounded-md p-1 bg-[var(--brightaqua)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110"
      >
        <MdDownload
          size={16}
          className="text-[var(--bluetext)] dark:text-[var(--white)]"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-[var(--background)] rounded-md shadow-lg z-10">
          <button
            onClick={() => {
              onExportCSV();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-xs text-white hover:bg-[var(--softpink)] dark:hover:bg-[var(--brimagenta)] rounded-t-md"
          >
            Export as CSV
          </button>
          <button
            onClick={() => {
              onExportPNG();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-xs text-white hover:bg-[var(--softpink)] dark:hover:bg-[var(--brimagenta)] rounded-b-md"
          >
            Export as PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
