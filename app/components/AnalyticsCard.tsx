"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { generateInsights } from "@/app/components/utils/generateInsights";

function AnalyticsCard() {
  const [insights, setInsights] = useState<{
    totalFootTraffic: number;
    totalAisleTraffic: number;
    totalDwellTime: number;
    averageDwellTime: string;
  } | null>(null);

  useEffect(() => {
    async function fetchInsights() {
      const data = await generateInsights();
      setInsights({
        totalFootTraffic: data.totalFootTraffic,
        totalAisleTraffic: data.topAisleValue,
        totalDwellTime: data.totalDwellTime,
        averageDwellTime: data.averageDwellTime,
      });
    }

    fetchInsights();
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-4 p-4">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-base text-[var(--bluetext)] dark:text-white">
          Analysis
        </h1>
        <Link
          href={"/dashboard/insights"}
          className="flex flex-row items-center gap-x-2"
        >
          <button className="rounded-md p-1 bg-[var(--softcyan)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110">
            <MdArrowOutward size={16} className="text-white" />
          </button>
        </Link>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full flex flex-col items-center justify-center bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
          <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
            Total Foot Traffic
          </h1>
          <h1 className="text-center text-[var(--bluetext)] dark:text-white text-3xl font-semibold">
            {insights ? insights.totalFootTraffic : "..."}
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
          <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
            Total Aisle Visits
          </h1>
          <h1 className="text-center text-[var(--bluetext)] dark:text-white text-3xl font-semibold">
            {insights ? insights.totalAisleTraffic : "..."}
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full flex flex-col items-center justify-center bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
          <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
            Total Dwell Time
          </h1>
          <h1 className="text-center text-[var(--bluetext)] dark:text-white text-3xl font-semibold">
            {insights ? insights.totalDwellTime : "..."} mins
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
          <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
            Average Dwell Time
          </h1>
          <h1 className="text-center text-[var(--bluetext)] dark:text-white text-3xl font-semibold">
            {insights ? insights.averageDwellTime : "..."} mins
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;
