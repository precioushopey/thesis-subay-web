import React from "react";
import AnalyticsLineChart from "../components/AnalyticsLine";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";
import ShelfChart from "../components/ShelfChart";
import { MdFlag, MdCircle } from "react-icons/md";
import {
  shelfA,
  shelfB,
  shelfC,
  shelfD,
  shelfE,
  shelfF,
  shelfG,
  shelfH,
} from "@/app/lib/data";

const AnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      {/* TOP */}
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-full flex flex-row gap-4">
          <div className="w-full lg:w-1/3 h-full flex flex-col gap-4">
            <div className="relative w-full h-full flex flex-col justify-center bg-[#0B1739] rounded-md p-4">
              <div className="absolute top-4 left-4 flex flex-row items-center gap-2 text-[#AEB9E1]">
                <MdFlag size={18} />
                <h1 className="text-sm font-medium">Peak Day</h1>
              </div>
              <h1 className="items-center justify-center text-2xl font-semibold">
                Day 1
              </h1>
            </div>
            <div className="relative w-full h-full flex flex-col justify-center bg-[#0B1739] rounded-md p-4">
              <div className="absolute top-4 left-4 flex flex-row items-center gap-2 text-[#AEB9E1]">
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
      {/* BOTTOM */}
      <div className="w-full h-full flex flex-col gap-4 p-4 rounded-md bg-[#0B1739]">
        <AnalyticsBarChart page="analytics" />
        <div className="w-full h-full flex flex-col gap-4">
          <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShelfChart label={"Shelf A"} data={shelfA} />
            <ShelfChart label={"Shelf B"} data={shelfB} />
            <ShelfChart label={"Shelf C"} data={shelfC} />
            <ShelfChart label={"Shelf D"} data={shelfD} />
          </div>
          <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShelfChart label={"Shelf E"} data={shelfE} />
            <ShelfChart label={"Shelf F"} data={shelfF} />
            <ShelfChart label={"Shelf G"} data={shelfG} />
            <ShelfChart label={"Shelf H"} data={shelfH} />
          </div>
          <ul className="flex flex-row items-center justify-center text-center gap-4">
            <li className="flex flex-row items-center justify-center text-[#CB3CFF] text-[10px] gap-x-1">
              <span>
                <MdCircle />
              </span>
              <h6>long</h6>
            </li>
            <li className="flex flex-row items-center justify-center text-[#0038FF] text-[10px] gap-x-1">
              <span>
                <MdCircle />
              </span>
              <h6>medium</h6>
            </li>
            <li className="flex flex-row items-center justify-center text-[#00C2FF] text-[10px] gap-x-1">
              <span>
                <MdCircle />
              </span>
              <h6>short</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
