import React from "react";
import Image from "next/image";
import AnalyticsLineChart from "../../components/AnalyticsLine";
import AnalyticsBarChart from "../../components/AnalyticsBar";
import AnalyticsPieChart from "../../components/AnalyticsPie";

const PostAnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <div className="w-full h-full flex flex-col sm:flex-row bg-white dark:bg-[var(--navyblue)] rounded-md gap-4 p-4">
        <div className="h-full w-[1/2] flex flex-col gap-y-4">
          <h1 className="font-semibold text-base">
            Customer and Zone-based Counting
          </h1>
          <div className="h-full w-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            {/*<Image
              src={"/zone.png"}
              alt={"Zone"}
              width={3000}
              height={3000}
              objectFit="cover"
            />*/}
            <video
              controls
              preload="none"
              autoPlay
              loop
              muted
              className="w-full h-full sm:h-[1/2] sm:w-[1/2] object-cover"
            >
              <source src="/zone.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="h-full w-[1/2] flex flex-col gap-y-4">
          <h1 className="font-semibold text-base">Heatmap Overlay</h1>
          <div className="h-full w-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            {/*<Image
              src={"/heatmap.png"}
              alt={"Heatmap"}
              width={3000}
              height={3000}
              objectFit="cover"
            />*/}
            <video
              controls
              preload="none"
              autoPlay
              loop
              muted
              className="w-full h-full sm:h-[1/2] sm:w-[1/2] object-cover"
            >
              <source src="/heatmap.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col sm:flex-row gap-4">
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsPieChart page="analytics" />
        </div>
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsLineChart page="analytics" />
        </div>
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsBarChart page="analytics" />
        </div>
      </div>
    </div>
  );
};

export default PostAnalyticsPage;
