import React from "react";
import AnalyticsBarChart from "../../components/AnalyticsBar";
import AnalyticsPieChart from "../../components/AnalyticsPie";
import AnalyticsLineChart from "../../components/AnalyticsLine";
import PeakMetricsCard from "../../components/PeakMetricsCard";

const AnalyticsPage = () => {
  return (
    <section className="container lg:flex-row">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <PeakMetricsCard />
          <div className="w-full lg:w-2/3">
            <AnalyticsPieChart page="insights" />
          </div>
        </div>
        <AnalyticsLineChart page="insights" />
      </div>
      <div className="w-full">
        <AnalyticsBarChart page="insights" />
      </div>
    </section>
  );
};

export default AnalyticsPage;
