"use client";
import React, { useState } from "react";
import AnalyticsLineChart from "./AnalyticsLine";
import AnalyticsBarChart from "./AnalyticsBar";
import AnalyticsPieChart from "./AnalyticsPie";
import { MdOpenInFull, MdClose } from "react-icons/md";

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
        className="flex flex-row items-center justify-center rounded-md bg-[var(--purple)] p-1 transform transition duration-500 hover:scale-110"
      >
        <MdOpenInFull size={16} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative bg-[var(--card)] rounded-md p-4 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 rounded-md transform transition duration-500 hover:scale-110 p-2"
            >
              <MdClose size={16} />
            </button>
            <div className="mt-4">
              {chartType === "line" && <AnalyticsLineChart page="analytics" />}
              {chartType === "pie" && <AnalyticsPieChart page="analytics" />}
              {chartType === "bar" && <AnalyticsBarChart page="analytics" />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandButton;
