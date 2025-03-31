"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import DatePicker from "./DatePicker";
import ExportButton from "./ExportButton";
import ExpandButton from "./ExpandButton";
import { lineChartData } from "@/app/lib/lineChartData";
import { MdArrowOutward, MdLegendToggle } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalyticsLineChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [hiddenDates, setHiddenDates] = useState<string[]>([]);
  const [showLegend, setShowLegend] = useState(false);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 3.7 : window.innerHeight / 2;

  const exportCSV = () => {
    const header = ["Hour", "Date", "Value"];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header.join(",")]
        .concat(
          filteredData.map((row) => `${row.hour},${row.date},${row.value}`)
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_line_chart.csv");
    document.body.appendChild(link);
    link.click();
  };

  const exportPNG = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "analytics_line_chart.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  const chartToolbar =
    page === "dashboard" ? (
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">Daily Foot Traffic</h1>
        <div className="absolute top-3 right-4 flex flex-row items-center gap-2">
          <DatePicker onRangeChange={setDateRange} />
          <Link href={"/analytics"}>
            <button className="flex flex-row items-center justify-center rounded-md p-1 bg-[var(--softcyan)] dark:bg-[var(--brimagenta)] transition duration-500 hover:scale-110 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
              <MdArrowOutward size={16} />
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="text-sm text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium">
            Daily Foot Traffic
          </h1>
          <button
            className="items-center text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-white transition duration-500 hover:scale-110"
            onClick={() => setShowLegend(!showLegend)}
          >
            <MdLegendToggle size={16} />
          </button>
        </div>
        <div className="absolute top-3 right-4 flex flex-row items-center gap-2">
          <DatePicker onRangeChange={setDateRange} />
          <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
          <ExpandButton label="Expand Line Chart" chartType="line" />
        </div>
      </div>
    );

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
    filteredData.reduce((acc, { hour, date, value }) => {
      if (!acc[hour]) acc[hour] = { hour };
      acc[hour][date] = value;
      return acc;
    }, {} as any)
  );

  const uniqueDates = Array.from(
    new Set(filteredData.map((entry) => entry.date))
  );

  const handleLegendClick = (data: any) => {
    const dateKey = data.value;
    setHiddenDates((prev) =>
      prev.includes(dateKey)
        ? prev.filter((d) => d !== dateKey)
        : [...prev, dateKey]
    );
  };

  return (
    <div
      ref={chartRef}
      className="relative rounded-md bg-white dark:bg-[var(--navyblue)] p-4"
      style={{ height: chartHeight }}
    >
      <div>{chartToolbar}</div>
      <div className="text-[10px] h-full -mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={finalChartData} margin={{ top: 25, left: -35 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#AEB9E1"
            />
            <XAxis
              dataKey="hour"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#AEB9E1" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#AEB9E1" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#081028",
                borderRadius: "5px",
                color: "#FFF",
              }}
              itemStyle={{ color: "#FFF" }}
              cursor={{ stroke: "#FFF", strokeWidth: 2 }}
            />
            {showLegend && (
              <Legend
                align="center"
                verticalAlign="bottom"
                wrapperStyle={{
                  paddingBottom: "10px",
                  paddingLeft: "50px",
                  color: "#AEB9E1",
                }}
                onClick={handleLegendClick}
              />
            )}
            {uniqueDates.map((date, index) => {
              const colorList = ["#7F25FB", "#CB3CFF", "#0038FF", "#00C2FF"];
              return (
                <Line
                  key={date}
                  type="monotone"
                  dataKey={date}
                  stroke={colorList[index % 4]}
                  dot={false}
                  hide={hiddenDates.includes(date)}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;
