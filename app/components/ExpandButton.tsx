"use client";
import React, { useState } from "react";
import AnalyticsLineChart from "./AnalyticsLine";
import AnalyticsBarChart from "./AnalyticsBar";
import AnalyticsPieChart from "./AnalyticsPie";
import ShelfChart from "../components/ShelfChart";
import { MdOpenInFull, MdClose, MdCircle } from "react-icons/md";
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

const ExpandButton = ({
  label,
  chartType,
  reload,
}: {
  label: string;
  chartType: "line" | "bar" | "pie";
  reload?: VoidFunction;
}) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    if (reload) reload();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-row items-center justify-center rounded-md bg-[#7F25FB] p-1 transform transition duration-500 hover:scale-110"
      >
        <MdOpenInFull size={16} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative bg-[#0B1739] rounded-md p-4 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 rounded-md transform transition duration-500 hover:scale-110 p-2"
            >
              <MdClose size={16} />
            </button>
            <div className="mt-4">
              {chartType === "line" && <AnalyticsLineChart page="analytics" />}
              {chartType === "pie" && <AnalyticsPieChart page="analytics" />}
              {chartType === "bar" && (
                <div className="w-full h-full flex flex-col gap-4 p-4">
                  <AnalyticsBarChart page="analytics" />
                  <div className="w-full h-full flex flex-col gap-4 pt-4 border-t border-[#AEB9E1]">
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
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandButton;
