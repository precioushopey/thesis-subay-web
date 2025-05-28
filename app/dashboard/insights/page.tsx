import React from "react";
import AnalyticsBarChart from "../../components/AnalyticsBar";
import AnalyticsPieChart from "../../components/AnalyticsPie";
import AnalyticsLineChart from "../../components/AnalyticsLine";
import PeakMetricsCard from "../../components/PeakMetricsCard";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-full flex flex-col sm:flex-row gap-4">
          <PeakMetricsCard />
          <div className="w-full md:w-2/3 h-full">
            <AnalyticsPieChart page="insights" />
          </div>
        </div>
        <AnalyticsLineChart page="insights" />
      </div>
      <div className="w-full h-full">
        <AnalyticsBarChart page="insights" />
      </div>
    </div>
  );
};

export default AnalyticsPage;
