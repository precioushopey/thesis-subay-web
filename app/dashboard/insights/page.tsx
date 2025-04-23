import React from "react";
import { MdFlag } from "react-icons/md";
import AnalyticsLineChart from "../../components/AnalyticsLine";
import AnalyticsBarChart from "../../components/AnalyticsBar";
import AnalyticsPieChart from "../../components/AnalyticsPie";
import PeakMetricsCard from "../../components/PeakMetricsCard";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      {/* LEFT */}
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-full flex flex-col sm:flex-row gap-4">
          <PeakMetricsCard />
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
