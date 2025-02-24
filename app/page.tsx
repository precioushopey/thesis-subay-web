import AnalyticsLineChart from "./components/AnalyticsLine";
import AnalyticsBarChart from "./components/AnalyticsBar";
import AnalyticsPieChart from "./components/AnalyticsPie";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {/* CAMERA FEED */}
        <div className="h-2/3 w-full flex flex-col bg-[#0B1739] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">Camera Feed</h1>
          <div className="w-full h-full flex flex-col sm:flex-row">
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-tl-md">
              01
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-tr-md">
              02
            </div>
          </div>
          <div className="w-full h-full flex flex-col sm:flex-row">
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-bl-md">
              03
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-br-md">
              04
            </div>
          </div>
        </div>
        {/* HEATMAP */}
        <div className="h-auto sm:h-1/3 w-full flex flex-col bg-[#0B1739]  rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">Heatmap</h1>
          <div className="w-full h-full flex flex-col sm:flex-row">
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-l-md">
              01
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1]">
              02
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1]">
              03
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-r-md">
              04
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col items-start justify-start gap-4 text-[10px] text-white">
        {/* CHARTS 1 */}
        <div className="w-full h-1/3 bg-[#0B1739] items-start justify-start rounded-md p-2">
          <AnalyticsLineChart />
        </div>
        {/* CHARTS 2 */}
        <div className="w-full h-1/3 bg-[#0B1739] items-start justify-start rounded-md p-2">
          <AnalyticsBarChart />
        </div>
        {/* CHARTS 3 */}
        <div className="w-full h-1/3 bg-[#0B1739] items-start justify-start rounded-md p-2">
          <AnalyticsPieChart />
        </div>
      </div>
    </div>
  );
}
