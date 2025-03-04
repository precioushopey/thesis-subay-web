import React from "react";
import AnalyticsLineChart from "../components/AnalyticsLine";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      <div className="w-full lg:w-1/2 h-full flex flex-col gap-4">
        <AnalyticsLineChart page="analytics" />
        <div className="w-full h-full sm:h-1/3 flex flex-col sm:flex-row justify-between bg-[#0B1739] rounded-md hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
          <div className="w-full sm:w-2/3 h-1/2 sm:h-full">
            <AnalyticsPieChart />
          </div>
          <div className="w-full sm:w-1/3 h-1/2 sm:h-full p-4">
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
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col gap-4">
        <AnalyticsBarChart page="analytics" />
        <div className="w-full h-full sm:h-1/3 flex flex-col sm:flex-row justify-between bg-[#0B1739] rounded-md hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
          <div className="w-full sm:w-2/3 h-1/2 sm:h-full">
            <AnalyticsPieChart />
          </div>
          <div className="w-full sm:w-1/3 h-1/2 sm:h-full p-4">
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
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
