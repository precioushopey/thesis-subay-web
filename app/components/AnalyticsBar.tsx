"use client";
import { useRef } from "react";
import ExportButton from "./ExportButton";
import html2canvas from "html2canvas";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
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
  { name: "Shelf A", visits: 400, dwell_time: 240 },
  { name: "Shelf B", visits: 300, dwell_time: 139 },
  { name: "Shelf C", visits: 200, dwell_time: 980 },
  { name: "Shelf D", visits: 278, dwell_time: 390 },
  { name: "Shelf E", visits: 189, dwell_time: 480 },
  { name: "Shelf F", visits: 239, dwell_time: 380 },
  { name: "Shelf G", visits: 349, dwell_time: 430 },
  { name: "Shelf H", visits: 400, dwell_time: 240 },
];

const AnalyticsBarChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 4.5 : window.innerHeight / 2.5;

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
    <div ref={chartRef} style={{ height: chartHeight }} className="relative">
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">
          Shelf Visits vs. Dwell Time
        </h1>
        <span className="absolute top-0 right-0">{chartIcon}</span>
      </div>
      <div className="text-[10px] h-full -mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: -25 }}>
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
  );
};

export default AnalyticsBarChart;
