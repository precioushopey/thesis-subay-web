import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import CameraFeed from "@/videos/camera_sample.mp4";
import AnalyticsLineChart from "./components/AnalyticsLine";
import AnalyticsBarChart from "./components/AnalyticsBar";
import AnalyticsPieChart from "./components/AnalyticsPie";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      {/* LEFT */}
      <div className="h-full w-full lg:w-2/3 flex flex-col gap-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
        {/* CAMERA FEED AND HEATMAP */}
        <div className="w-full h-full flex flex-col bg-[#0B1739] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">
            Camera Feed and Heatmap
          </h1>
          <div className="border border-[#AEB9E1] rounded-md">
            <BackgroundVideo src={CameraFeed} />
            <div className="w-full h-fit flex flex-col sm:flex-row">
              <div className="border border-[#AEB9E1] rounded-bl-md">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                />
              </div>
              <div className="border border-[#AEB9E1]">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                />
              </div>
              <div className="border border-[#AEB9E1]">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                />
              </div>
              <div className="border border-[#AEB9E1] rounded-br-md">
                <Image
                  src={"/heatmap_sample.png"}
                  alt={""}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="h-full w-full lg:w-1/3 flex flex-col gap-4">
        <div className="w-full h-full cursor-pointer">
          <AnalyticsLineChart page="dashboard" />
        </div>
        <div className="w-full h-full cursor-pointer">
          <AnalyticsBarChart page="dashboard" />
        </div>
        <div className="w-full h-full hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
          <AnalyticsPieChart />
        </div>
      </div>
    </div>
  );
}
