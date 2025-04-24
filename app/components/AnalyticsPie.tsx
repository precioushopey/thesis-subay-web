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
  const chartRef = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [hiddenDates, setHiddenDates] = useState<string[]>([]);
  const [chartHeight, setChartHeight] = useState<number>(300);

  useEffect(() => {
    const updateHeight = () => {
      const height =
        page === "dashboard"
          ? window.innerHeight / 3.7
          : window.innerHeight / 2.9;
      setChartHeight(height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [page]);

  const COLORS_LIGHT = [
    "#8979FF",
    "#FF928A",
    "#3CC3DF",
    "#FFAE4C",
    "#537FF1",
    "#6FD195",
  ];
  const COLORS_DARK = ["#7F25FB", "#CB3CFF", "#0038FF", "#00C2FF"];

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

  const visibleData = filteredData.filter(
    (entry) => !hiddenDates.includes(entry.date)
  );

  const chartToolbar =
    page === "dashboard" ? (
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium text-sm">
          Total Foot Traffic
        </h1>
        <div className="flex flex-row items-center gap-x-2">
          <DatePicker onRangeChange={setDateRange} />
          <Link href={"/analytics"}>
            <button className="rounded-md p-1 bg-[var(--softcyan)] dark:bg-[var(--brimagenta)] transition duration-500 hover:scale-110">
              <MdArrowOutward size={16} className="text-white" />
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="flex flex-row justify-between">
        <h1 className="text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium text-sm">
          Total Foot Traffic
        </h1>
        <div className="flex flex-row items-center gap-x-2 pb-5">
          <DatePicker onRangeChange={setDateRange} />
          <ExpandButton label="Expand Pie Chart" chartType="pie" />
        </div>
      </div>
    );

  return (
    <div
      ref={chartRef}
      className="rounded-md bg-white dark:bg-[var(--navyblue)] p-4"
      style={{ height: chartHeight }}
    >
      <div>{chartToolbar}</div>
      <div className="w-full h-full flex flex-col justify-between text-[10px]">
        <div className="relative">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#081028" : "#FFF",
                  borderRadius: "5px",
                  color: theme === "dark" ? "#FFF" : "#000",
                }}
                itemStyle={{ color: theme === "dark" ? "#FFF" : "#000" }}
                cursor={{
                  fill:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.1)",
                }}
              />
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={visibleData}
                cx="50%"
                cy="100%"
                innerRadius={60}
                outerRadius={85}
                label
              >
                {visibleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center mt-2">
            <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-xs">
              Total
            </h1>
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
