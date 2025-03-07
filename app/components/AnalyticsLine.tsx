"use client";
import { useRef } from "react";
import ExportButton from "./ExportButton";
import html2canvas from "html2canvas";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
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

const data = [
  { name: "8:00 AM", day_1: 400, day_2: 240, day_3: 240 },
  { name: "9:00 AM", day_1: 300, day_2: 139, day_3: 221 },
  { name: "10:00 AM", day_1: 200, day_2: 980, day_3: 229 },
  { name: "11:00 AM", day_1: 278, day_2: 390, day_3: 200 },
  { name: "12:00 AM", day_1: 189, day_2: 480, day_3: 218 },
  { name: "1:00 PM", day_1: 239, day_2: 380, day_3: 250 },
  { name: "2:00 PM", day_1: 400, day_2: 240, day_3: 240 },
  { name: "3:00 PM", day_1: 300, day_2: 139, day_3: 221 },
  { name: "4:00 PM", day_1: 200, day_2: 980, day_3: 229 },
  { name: "5:00 PM", day_1: 278, day_2: 390, day_3: 200 },
];

const AnalyticsLineChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 3.7 : window.innerHeight / 2;

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["name,day_1,day_2,day_3"]
        .concat(
          data.map(
            (row) => `${row.name},${row.day_1},${row.day_2},${row.day_3}`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_line_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const chartIcon =
    page === "dashboard" ? (
      <Link href={"/analytics"}>
        <button className="flex flex-row items-center justify-center rounded-md p-1 bg-[#CB3CFF] transform transition duration-500 hover:scale-110 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
          <MdArrowOutward size={16} />
        </button>
      </Link>
    ) : (
      <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
    );

  return (
    <div
      ref={chartRef}
      className="relative rounded-md bg-[#0B1739] p-4"
      style={{ height: chartHeight }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-sm font-medium text-white">Daily Foot Traffic</h1>
        </div>
        <span className="absolute top-4 right-4">{chartIcon}</span>
      </div>
      <div className="text-[10px] h-full -mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -25, right: 10 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#AEB9E1"
            />
            <XAxis
              dataKey="name"
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
            <Line
              type="monotone"
              dataKey="day_1"
              stroke="#CB3CFF"
              activeDot={{
                r: 8,
                fill: "#CB3CFF",
                stroke: "#FFF",
                strokeWidth: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="day_2"
              stroke="#0038FF"
              activeDot={{
                r: 8,
                fill: "#0038FF",
                stroke: "#FFF",
                strokeWidth: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="day_3"
              stroke="#00C2FF"
              activeDot={{
                r: 8,
                fill: "#00C2FF",
                stroke: "#FFF",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;
