"use client";
import { MdInsights } from "react-icons/md";

const ExportButton = () => {
  return (
    <div>
      <a href="/insights-report.html" target="_blank" rel="noopener noreferrer">
        <button className="flex flex-row items-center justify-center rounded-md px-4 py-2 bg-[var(--brightaqua)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110">
          <span className="text-white text-xs font-semibold dark:font-medium mr-2">
            Generate Insights
          </span>
          <MdInsights size={16} />
        </button>
      </a>
    </div>
  );
};

export default ExportButton;
