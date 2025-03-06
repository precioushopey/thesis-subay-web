"use client";
import { useRef } from "react";
import ExportButton from "./ExportButton";
import html2canvas from "html2canvas";
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

const data = [
  { name: "Shelf 1", visits: 4000, dwell_time: 2400 },
  { name: "Shelf 2", visits: 3000, dwell_time: 1398 },
  { name: "Shelf 3", visits: 2000, dwell_time: 9800 },
  { name: "Shelf 4", visits: 2780, dwell_time: 3908 },
  { name: "Shelf 5", visits: 1890, dwell_time: 4800 },
  { name: "Shelf 6", visits: 2390, dwell_time: 3800 },
  { name: "Shelf 7", visits: 3490, dwell_time: 4300 },
  { name: "Shelf 8", visits: 4000, dwell_time: 2400 },
];

const AnalyticsBarChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 3.7 : window.innerHeight / 2;

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["name,visits,dwell_time,amt"]
        .concat(
          data.map((row) => `${row.name},${row.visits},${row.dwell_time}`)
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_bar_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  return (
    <div
      ref={chartRef}
      className="rounded-md bg-[#0B1739] p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer"
      style={{ height: chartHeight }}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">
          Shelf Visits vs. Dwell Time
        </h1>
        <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
      </div>
      <div className="text-[10px] h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 15, bottom: 20, left: -22 }}>
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
              cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
            />
            <Legend wrapperStyle={{ color: "#AEB9E1" }} />
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
  );
};

export default AnalyticsBarChart;
