import React from "react";
import ExportButton from "../components/ExportButton";
import AnalyticsLineChart from "../components/AnalyticsLine";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row p-4 -mt-4 text-xs gap-4 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      <div className="w-full lg:w-1/2 h-full flex flex-col bg-[#0B1739] rounded-md p-4 text-white gap-4">
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold text-base">Analytics 1</h1>
          <ExportButton />
        </div>
        <AnalyticsLineChart />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col gap-4">
        <div className="w-full h-full sm:h-2/3 bg-[#0B1739] rounded-md p-4">
          <AnalyticsBarChart />
        </div>
        <div className="w-full h-full sm:h-1/3 flex flex-col sm:flex-row justify-between bg-[#0B1739] rounded-md p-4">
          <div className="w-full sm:w-2/3 h-full">
            <AnalyticsPieChart />
          </div>
          <div className="w-full sm:w-1/3 h-full">
            <h1 className="text-sm">Statistics</h1>
            <ul
              role="list"
              className="list-disc text-xs px-4 marker:text-[#CB3CFF] ..."
            >
              <li>Stall 1</li>
              <li>Stall 2</li>
              <li>Stall 3</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
