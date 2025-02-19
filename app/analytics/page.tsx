import React from "react";
import AnalyticsLineChart from "../components/AnalyticsLine";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-row p-4 -mt-4 text-xs font-[family-name:var(--font-prompt)]">
      <div className="w-full h-full flex flex-col bg-[#0B1739] border-t border-l border-b border-[#AEB9E1] rounded-l-md p-4 text-white">
        <h1 className="font-semibold text-base pb-2">Analytics 1</h1>
        <AnalyticsLineChart />
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full bg-[#0B1739] border-t border-l border-r border-[#AEB9E1] rounded-tr-md p-4">
          <AnalyticsBarChart />
        </div>
        <div className="w-full h-full bg-[#0B1739] border border-[#AEB9E1] rounded-br-md p-4">
          <AnalyticsPieChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
