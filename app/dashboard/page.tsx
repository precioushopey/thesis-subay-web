import Link from "next/link";
import React, { JSX } from "react";
import { format, parseISO } from "date-fns";
import { pieChartData } from "@/app/lib/pieChartData";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";
import AnalyticsLineChart from "../components/AnalyticsLine";
import {
  MdVideocam,
  MdBubbleChart,
  MdSpaceDashboard,
  MdInsights,
  MdDateRange,
  MdArrowOutward,
} from "react-icons/md";

type DashboardCard = {
  label: string;
  href: string;
  icon: JSX.Element;
  gradient: string;
};

const dashboardCards: DashboardCard[] = [
  {
    label: "Live Analytics",
    href: "../dashboard/live-analytics",
    icon: <MdVideocam size={24} />,
    gradient:
      "bg-gradient-to-r from-[var(--deepteal)] via-[var(--deepteal)] to-[var(--brightaqua)] dark:from-[var(--cyanblue)] dark:via-[var(--cyanblue)] dark:to-[var(--royalblue)]",
  },
  {
    label: "Heatmapping",
    href: "../dashboard/heatmapping",
    icon: <MdBubbleChart size={24} />,
    gradient:
      "bg-gradient-to-r from-[var(--brightaqua)] via-[var(--softblue)] to-[var(--softblue)] dark:from-[var(--royalblue)] dark:via-[var(--royalblue)] dark:to-[var(--elecpurple)]",
  },
  {
    label: "Post Analytics",
    href: "../dashboard/post-analytics",
    icon: <MdSpaceDashboard size={20} />,
    gradient:
      "bg-gradient-to-r from-[var(--softblue)] via-[var(--softcyan)] to-[var(--softcyan)] dark:from-[var(--elecpurple)] dark:via-[var(--elecpurple)] dark:to-[var(--purgenta)]",
  },
  {
    label: "Insights",
    href: "../dashboard/insights",
    icon: <MdInsights size={20} />,
    gradient:
      "bg-gradient-to-r from-[var(--softcyan)] via-[var(--cyanblue)] to-[var(--cyanblue)] dark:from-[var(--purgenta)] dark:via-[var(--brimagenta)] dark:to-[var(--brimagenta)]",
  },
];

const DashboardPage = () => {
  const uniqueDates = [
    ...new Set(pieChartData.map((item) => item.date)),
  ].sort();

  const formatDate = (dateStr: string) => {
    return format(parseISO(dateStr), "MMM dd, yyyy");
  };

  let formattedDateRange = "";

  if (uniqueDates.length === 1) {
    formattedDateRange = formatDate(uniqueDates[0]);
  } else if (uniqueDates.length > 1) {
    const start = formatDate(uniqueDates[0]);
    const end = formatDate(uniqueDates[uniqueDates.length - 1]);
    formattedDateRange = `${start} → ${end}`;
  }

  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row gap-4">
        {[0, 1].map((row) => (
          <div key={row} className="w-full flex flex-col sm:flex-row gap-4">
            {dashboardCards.slice(row * 2, row * 2 + 2).map((card) => (
              <div
                key={card.href}
                className={`w-full rounded-md text-white text-center font-semibold p-8 cursor-pointer ${card.gradient}`}
              >
                <Link href={card.href} className="links">
                  {card.icon}
                  {card.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="card lg:w-2/3 gap-4">
          <div className="flex justify-between">
            <h2 className="font-semibold text-[var(--bluetext)] dark:text-white">
              Introducing, SUBAY...
            </h2>
            <Link href={"/dashboard/about"} className="flex items-center gap-2">
              <button className="link-button">
                <MdArrowOutward size={16} className="text-white" />
              </button>
            </Link>
          </div>

          <div className="h-fit w-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <iframe
              src="https://www.youtube.com/embed/SwW-KC5U4Zo?playlist=SwW-KC5U4Zo&loop=1&autoplay=1&controls=0"
              title="Re-Identification"
              allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>

        <div className="w-fulll lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="card lg:w-1/2 items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                </span>
                <h3 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-sm">
                  Live Cameras
                </h3>
              </div>
              <div className="header">
                <h2>Camera 02 → Camera 05</h2>
                <h2>Camera 03 ← Camera 09</h2>
              </div>
            </div>

            <div className="card lg:w-1/2 items-center justify-center gap-2">
              <div className="flex text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-center text-sm gap-2">
                <MdDateRange size={18} className="animate-pulse" />
                <h3>Available Dates for Analysis</h3>
              </div>
              <h2 className="header text-2xl">{formattedDateRange}</h2>
            </div>
          </div>
          <AnalyticsCard />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AnalyticsPieChart page="analytics" />
        <AnalyticsLineChart page="analytics" />
        <AnalyticsBarChart page="analytics" />
      </div>
    </section>
  );
};

export default DashboardPage;
