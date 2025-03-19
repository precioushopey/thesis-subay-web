"use client";
import { useRef, useState, useMemo } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import DatePicker from "./DatePicker";
import ExportButton from "./ExportButton";
import ExpandButton from "./ExpandButton";
import ShelfChart from "./ShelfChart";
import { barChartData, shelf } from "@/app/lib/barChartData";
import { MdArrowOutward, MdCircle } from "react-icons/md";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { isWithinInterval, parseISO } from "date-fns";

const AnalyticsBarChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 3.7 : window.innerHeight / 2.2;

  const filteredShelfData = useMemo(() => {
    if (!dateRange) return shelf;
    return shelf.filter((d) => {
      const date = parseISO(d.date);
      return isWithinInterval(date, { start: dateRange[0], end: dateRange[1] });
    });
  }, [dateRange]);

  const exportCSV = () => {
    const header = ["Shelf", "Visits", "Dwell Time"];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header.join(",")]
        .concat(
          barChartData.map(
            (row) => `${row.shelf},${row.visits},${row.dwell_time}`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_bar_chart.csv");
    document.body.appendChild(link);
    link.click();
  };

  const exportPNG = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "analytics_bar_chart.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  const chartContents =
    page === "dashboard" ? (
      // DASHBOARD VIEW
      <div
        ref={chartRef}
        className="relative rounded-md bg-[var(--card)] p-4"
        style={{ height: chartHeight }}
      >
        <div className="flex flex-row justify-between">
          <h1 className="text-sm font-medium text-white">
            Shelf Visits vs. Dwell Time
          </h1>
          <span className="absolute top-3 right-4">
            <Link href={"/analytics"}>
              <button className="flex flex-row items-center justify-center rounded-md p-1 bg-[var(--pink)] transform transition duration-500 hover:scale-110 font-[family-name:var(--font-prompt)] selection:bg-[var(--purple)] selection:text-white">
                <MdArrowOutward size={16} />
              </button>
            </Link>
          </span>
        </div>
        <div className="text-[10px] h-full -mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData} margin={{ left: -25 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#AEB9E1"
              />
              <XAxis
                dataKey="shelf"
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
                cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
              />
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "25px",
                  color: "#AEB9E1",
                }}
              />
              <Bar
                dataKey="visits"
                fill="#CB3CFF"
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
              />
              <Bar
                dataKey="dwell_time"
                fill="#00C2FF"
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#F1C40F" stroke="#FFF" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    ) : (
      // ANALYTICS PAGE VIEW
      <div
        ref={chartRef}
        className="relative rounded-md bg-[var(--card)] py-4"
        style={{ height: chartHeight }}
      >
        <div className="flex flex-row justify-between px-4">
          <h1 className="text-sm font-medium text-white">
            Shelf Visits vs. Dwell Time
          </h1>
          <div className="absolute top-3 right-4 flex flex-row items-center gap-2">
            <DatePicker onDateChange={setDateRange} />
            <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
            <ExpandButton label="Expand Bar Chart" chartType="bar" />
          </div>
        </div>
        <div className="text-[10px] h-full -mt-2 px-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData} margin={{ left: -25 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#AEB9E1"
              />
              <XAxis
                dataKey="shelf"
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
                cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
              />
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "25px",
                  color: "#AEB9E1",
                }}
              />
              <Bar
                dataKey="visits"
                fill="#CB3CFF"
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
              />
              <Bar
                dataKey="dwell_time"
                fill="#00C2FF"
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#F1C40F" stroke="#FFF" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Shelf Charts */}
        <div className="w-full h-full flex flex-col rounded-b-md bg-[var(--card)] gap-4 px-4 pb-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShelfChart label={"Shelf A"} data={filteredShelfData} />
            <ShelfChart label={"Shelf B"} data={filteredShelfData} />
            <ShelfChart label={"Shelf C"} data={filteredShelfData} />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShelfChart label={"Shelf D"} data={filteredShelfData} />
            <ShelfChart label={"Shelf E"} data={filteredShelfData} />
            <ShelfChart label={"Shelf F"} data={filteredShelfData} />
          </div>
          <ul className="flex flex-row items-center justify-center text-center gap-x-4">
            <li className="flex flex-row items-center text-[var(--pink)] text-[10px] gap-x-1">
              <MdCircle /> <h6>long</h6>
            </li>
            <li className="flex flex-row items-center text-[var(--blue)] text-[10px] gap-x-1">
              <MdCircle /> <h6>medium</h6>
            </li>
            <li className="flex flex-row items-center text-[var(--teal)] text-[10px] gap-x-1">
              <MdCircle /> <h6>short</h6>
            </li>
          </ul>
        </div>
      </div>
    );

  return <div>{chartContents}</div>;
};

export default AnalyticsBarChart;
