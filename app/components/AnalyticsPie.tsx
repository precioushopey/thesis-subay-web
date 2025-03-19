"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import DatePicker from "./DatePicker";
import ExportButton from "./ExportButton";
import ExpandButton from "./ExpandButton";
import { MdArrowOutward } from "react-icons/md";
import { pieChartData } from "@/app/lib/pieChartData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const AnalyticsPieChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const COLORS = ["#CB3CFF", "#0038FF", "#00C2FF"];
  const chartRef = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [hiddenDates, setHiddenDates] = useState<string[]>([]);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 3.7 : window.innerHeight / 3;

  const exportCSV = () => {
    const header = ["Date", "Value"];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header.join(",")]
        .concat(filteredData.map((row) => `${row.date},${row.value}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_pie_chart.csv");
    document.body.appendChild(link);
    link.click();
  };

  const exportPNG = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "analytics_pie_chart.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  const chartToolbar =
    page === "dashboard" ? (
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">Total Foot Traffic</h1>
        <div className="absolute top-3 right-4 flex flex-row items-center gap-2">
          <DatePicker onRangeChange={setDateRange} />
          <Link href={"/analytics"}>
            <button className="flex flex-row items-center justify-center rounded-md p-1 bg-[var(--pink)] transition duration-500 hover:scale-110 font-[family-name:var(--font-prompt)] selection:bg-[var(--purple)] selection:text-white">
              <MdArrowOutward size={16} />
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="mb-8">
        <h1 className="text-sm font-medium text-white">Total Foot Traffic</h1>
        <div className="absolute top-3 right-3 flex flex-col items-end gap-y-2">
          <DatePicker onRangeChange={setDateRange} />
          <div className="flex flex-row items-center gap-x-2">
            <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
            <ExpandButton label="Expand Pie Chart" chartType="pie" />
          </div>
        </div>
      </div>
    );

  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      const filtered = pieChartData.filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate >= fromDate && entryDate <= toDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(pieChartData);
    }
  }, [dateRange]);

  const uniqueDates = Array.from(
    new Set(filteredData.map((entry) => entry.date))
  );

  const visibleData = filteredData.filter(
    (entry) => !hiddenDates.includes(entry.date)
  );

  return (
    <div
      ref={chartRef}
      className="relative rounded-md bg-[var(--card)] p-4"
      style={{ height: chartHeight }}
    >
      <div>{chartToolbar}</div>
      <div className="w-full h-full flex flex-col justify-between text-[10px]">
        <div className="relative h-full">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#081028",
                  borderRadius: "5px",
                  color: "#FFF",
                }}
                itemStyle={{ color: "#FFF" }}
                cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
              />
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={visibleData}
                cx="50%"
                cy="100%"
                innerRadius={65}
                outerRadius={85}
                label
              >
                {visibleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center mt-2">
            <h1 className="text-[var(--gray)] text-xs">Total</h1>
            <h1 className="font-semibold text-2xl">
              {filteredData.reduce((sum, entry) => sum + entry.value, 0)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPieChart;
