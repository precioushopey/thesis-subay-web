import Image from "next/image";
import AnalyticsLineChart from "./components/AnalyticsLine";
import AnalyticsBarChart from "./components/AnalyticsBar";
import AnalyticsPieChart from "./components/AnalyticsPie";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      {/* LEFT */}
      <div className="h-full w-full lg:w-2/3 flex flex-col gap-4">
        {/* CAMERA FEED AND HEATMAP */}
        <div className="h-full w-full flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">
            Camera Feed and Heatmap
          </h1>
          <div className="border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <video
              controls
              preload="none"
              autoPlay
              loop
              muted
              className="w-full object-cover"
            >
              <source src="/camera_sample.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full object-cover border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-bl-md">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <div className="w-full object-cover border border-[var(--bluetext)] dark:border-[var(--periwinkle)]">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <div className="w-full object-cover border border-[var(--bluetext)] dark:border-[var(--periwinkle)]">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <div className="w-full object-cover border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-br-md">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="h-full w-full lg:w-1/3 flex flex-col gap-4">
        <div className="h-1/3 w-full">
          <AnalyticsPieChart page="dashboard" />
        </div>
        <div className="h-1/3 w-full">
          <AnalyticsBarChart page="dashboard" />
        </div>
        <div className="h-1/3 w-full">
          <AnalyticsLineChart page="dashboard" />
        </div>
      </div>
    </div>
  );
}
