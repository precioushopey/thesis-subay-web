"use client";
import printJS from "print-js";
import { MdInsights } from "react-icons/md";
import { generateInsights } from "./utils/generateInsights";
import { HTMLTemplate } from "./utils/InsightReportTemplate";

const ExportButton = () => {
  const generateReport = async () => {
    const insights = await generateInsights();
    const htmlString = HTMLTemplate({ insights });

    const reportWindow = window.open("insight-report", "_blank");
    if (reportWindow) {
      reportWindow.document.open();
      reportWindow.document.write(htmlString);
      reportWindow.document.close();
    }
  };

  return (
    <div>
      <a
        onClick={() => {
          generateReport();
        }}
      >
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
