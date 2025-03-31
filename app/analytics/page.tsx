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
        <div className="w-full h-full flex flex-row gap-4">
          <div className="w-full lg:w-1/3 h-full flex flex-col gap-4">
            <div className="relative w-full h-full flex flex-col justify-center bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
              <div className="absolute top-3 left-3 flex flex-row items-center gap-2 text-[var(--bluetext)] dark:text-[var(--periwinkle)]">
                <MdFlag size={18} />
                <h1 className="text-sm font-medium">Peak Day</h1>
              </div>
              <h1 className="items-center justify-center text-2xl font-semibold">
                Day 1
              </h1>
            </div>
            <div className="relative w-full h-full flex flex-col justify-center bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
              <div className="absolute top-3 left-3 flex flex-row items-center gap-2 text-[var(--bluetext)] dark:text-[var(--periwinkle)]">
                <MdFlag size={18} />
                <h1 className="text-sm font-medium">Peak Hour</h1>
              </div>
              <h1 className="items-center justify-center text-2xl font-semibold">
                10:00 AM
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-2/3 h-full">
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
