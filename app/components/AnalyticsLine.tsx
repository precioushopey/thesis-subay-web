"use client";
import { useRef } from "react";
import html2canvas from "html2canvas";
import ExportButton from "./ExportButton";
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
  { name: "8:00 AM", day_1: 4000, day_2: 2400, day_3: 2400 },
  { name: "9:00 AM", day_1: 3000, day_2: 1398, day_3: 2210 },
  { name: "10:00 AM", day_1: 2000, day_2: 9800, day_3: 2290 },
  { name: "11:00 AM", day_1: 2780, day_2: 3908, day_3: 2000 },
  { name: "12:00 AM", day_1: 1890, day_2: 4800, day_3: 2181 },
  { name: "1:00 PM", day_1: 2390, day_2: 3800, day_3: 2500 },
  { name: "2:00 PM", day_1: 4000, day_2: 2400, day_3: 2400 },
  { name: "3:00 PM", day_1: 3000, day_2: 1398, day_3: 2210 },
  { name: "4:00 PM", day_1: 2000, day_2: 9800, day_3: 2290 },
  { name: "5:00 PM", day_1: 2780, day_2: 3908, day_3: 2000 },
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

  return (
    <div
      ref={chartRef}
      className="rounded-md bg-[#0B1739] p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer"
      style={{ height: chartHeight }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-sm font-medium text-white">Daily Foot Traffic</h1>
        </div>
        <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
      </div>
      <div className="text-[10px] h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 15, bottom: 20, left: -22, right: 5 }}
          >
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
            <Legend wrapperStyle={{ color: "#AEB9E1" }} />
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
