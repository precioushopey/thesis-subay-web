import React from "react";
import AnalyticsLineChart from "../components/AnalyticsLine";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";
import { MdFlag } from "react-icons/md";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      {/* LEFT */}
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-full flex flex-col sm:flex-row gap-4">
          <div className="w-full md:w-1/3 h-full flex flex-row sm:flex-col gap-4">
            <div className="w-full h-full flex flex-col items-start bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-2 p-4">
              <div className="flex flex-row items-center gap-x-2 font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)]">
                <MdFlag size={18} />
                <h1 className="text-sm">Peak Day</h1>
              </div>
              <h1 className="items-center justify-center text-2xl font-semibold">
                Day 1
              </h1>
            </div>
            <div className="w-full h-full flex flex-col items-start bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-2 p-4">
              <div className="flex flex-row items-center gap-x-2 font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)]">
                <MdFlag size={18} />
                <h1 className="text-sm">Peak Hour</h1>
              </div>
              <h1 className="items-center justify-center text-2xl font-semibold">
                10:00 AM
              </h1>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-full">
            <AnalyticsPieChart page="analytics" />
          </div>
        </div>
        <AnalyticsLineChart page="analytics" />
      </div>
      {/* RIGHT */}
      <div className="w-full h-full">
        <AnalyticsBarChart page="analytics" />
      </div>
    </div>
  );
};

export default AnalyticsPage;
