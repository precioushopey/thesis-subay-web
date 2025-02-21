import React from "react";
import ExportButton from "../components/ExportButton";
import AnalyticsLineChart from "../components/AnalyticsLine";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row p-4 -mt-4 text-xs font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      <div className="w-full h-auto flex flex-col bg-[#0B1739] rounded-t-md sm:rounded-l-md p-4 text-white">
        <div className="flex flex-row justify-between pb-4">
          <h1 className="font-semibold text-base">Analytics 1</h1>
          <ExportButton />
        </div>
        <AnalyticsLineChart />
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full bg-[#0B1739] sm:rounded-tr-md p-4">
          <AnalyticsBarChart />
        </div>
        <div className="w-full h-full bg-[#0B1739] rounded-b-md sm:rounded-br-md p-4">
          <AnalyticsPieChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
