"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DatePicker from "./DatePicker";
import ChartHeight from "./ChartHeight";
import ExpandButton from "./ExpandButton";
import { MdArrowOutward } from "react-icons/md";
import { lineChartData } from "@/app/lib/lineChartData";
import {
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type ChartEntry = {
  id: number;
  date: string;
  zone: string;
  value: number;
};

type AggregatedChartData = {
  zone: string;
  [date: string]: string | number;
};

const AnalyticsLineChart = ({ page }: { page: "analytics" | "insights" }) => {
  const chartHeight = ChartHeight(page);
  const [hiddenDates] = useState<string[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [filteredData, setFilteredData] = useState<ChartEntry[]>([]);
  const COLORS_DARK = ["#CB3CFF", "#7F25FB", "#0038FF", "#00C2FF"];
  const COLORS_LIGHT = ["#0396A6", "#0B698B", "#537FF1", "#3CC3DF", "#9CD3D8"];

  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.classList.contains("dark") ? "dark" : "light";

    setTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const colors = theme === "dark" ? COLORS_DARK : COLORS_LIGHT;

  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      const filtered = lineChartData.filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate >= fromDate && entryDate <= toDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(lineChartData);
    }
  }, [dateRange]);

  const finalChartData = Object.values(
    filteredData.reduce(
      (acc: Record<string, AggregatedChartData>, { zone, date, value }) => {
        if (!acc[zone]) {
          acc[zone] = { zone };
        }
        acc[zone][date] = value;
        return acc;
      },
      {}
    )
  );

  const chartToolbar =
    page === "analytics" ? (
      <div className="flex flex-row items-center justify-between">
        <h1 className="header-text">Avg. Dwell Time</h1>
        <div className="flex flex-row items-center gap-x-2">
          <DatePicker onRangeChange={setDateRange} />
          <Link href={"/dashboard/insights"}>
            <button className="link-button">
              <MdArrowOutward size={16} className="text-white" />
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2">
        <div className="flex flex-row gap-x-2">
          <h1 className="header-text">Average Dwell Time per Aisle</h1>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <DatePicker onRangeChange={setDateRange} />
          <ExpandButton chartType="line" />
        </div>
      </div>
    );

  return (
    <div
      ref={chartRef}
      className="relative rounded-md bg-white dark:bg-[var(--navyblue)] p-4"
      style={{ height: chartHeight }}
    >
      <div>{chartToolbar}</div>
      <div className="text-[10px] w-full h-full -mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={finalChartData} margin={{ top: 25, left: -35 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme === "dark" ? "#AEB9E1" : "#0B698B"}
            />
            <XAxis
              dataKey="zone"
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme === "dark" ? "#AEB9E1" : "#0B698B" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme === "dark" ? "#AEB9E1" : "#0B698B" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === "dark" ? "#081028" : "#F2F2F2",
                borderRadius: "5px",
                color: theme === "dark" ? "#FFF" : "#044F6C",
              }}
              itemStyle={{ color: theme === "dark" ? "#FFF" : "#044F6C" }}
              cursor={{
                stroke: theme === "dark" ? "#FFF" : "#044F6C",
                strokeWidth: 2,
              }}
            />
            <Legend
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{
                paddingBottom: "10px",
                paddingLeft: "50px",
                color: theme === "dark" ? "#AEB9E1" : "#0B698B",
              }}
            />
            {[...new Set(filteredData.map((entry) => entry.date))].map(
              (date, index) => (
                <Line
                  key={date}
                  type="monotone"
                  dataKey={date}
                  stroke={colors[index % colors.length]}
                  dot={false}
                  hide={hiddenDates.includes(date)}
                />
              )
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;
