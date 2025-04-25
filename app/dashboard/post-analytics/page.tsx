import React from "react";
import Image from "next/image";
import AnalyticsLineChart from "../../components/AnalyticsLine";
import AnalyticsBarChart from "../../components/AnalyticsBar";
import AnalyticsPieChart from "../../components/AnalyticsPie";

const PostAnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      {/* TOP */}
      <div className="w-full h-full flex flex-col sm:flex-row bg-white dark:bg-[var(--navyblue)] rounded-md">
        <div className="h-full w-[1/2] flex flex-col py-4 pl-4 pr-2">
          <h1 className="font-semibold text-base pb-2">
            Customer and aisle-based Counting
          </h1>
          <div className="h-full w-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <Image src={"/roi.png"} alt={""} width={600} height={600} />
          </div>
        </div>
        <div className="h-full w-[1/2] flex flex-col py-4 pr-4 pl-2">
          <h1 className="font-semibold text-base pb-2">Heatmap Overlay</h1>
          <div className="h-full w-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <Image src={"/heatmapping.png"} alt={""} width={600} height={600} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="h-full w-full flex flex-col sm:flex-row gap-4">
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsPieChart page="dashboard" />
        </div>
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsLineChart page="dashboard" />
        </div>
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsBarChart page="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default PostAnalyticsPage;
