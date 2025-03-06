"use client";
import { useRef } from "react";
import ExportButton from "./ExportButton";
import html2canvas from "html2canvas";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Day 1", value: 400 },
  { name: "Day 2", value: 300 },
  { name: "Day 3", value: 300 },
];

const COLORS = ["#CB3CFF", "#0038FF", "#00C2FF"];

const AnalyticsPieChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const chartHeight =
    page === "dashboard" ? window.innerHeight / 3.7 : window.innerHeight / 3;

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["name,value"]
        .concat(data.map((row) => `${row.name},${row.value}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_pie_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  return (
    <div
      ref={chartRef}
      className="rounded-md bg-[#0B1739] p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer"
      style={{ height: chartHeight }}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">Total Foot Traffic</h1>
        <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
      </div>
      <div className="w-full h-full flex flex-col sm:flex-row justify-between text-[10px]">
        <div className="relative sm:w-2/3 h-full">
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
                data={data}
                cx="50%"
                cy="100%"
                innerRadius={65}
                outerRadius={85}
                fill="#CB3CFF"
                label
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
            <h1 className="text-[#AEB9E1] text-xs">Total</h1>
            <h1 className="font-semibold text-2xl">1234</h1>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-full text-center pt-4 pl-4">
          <h1 className="text-xs text-[#AEB9E1]">Peak Hours</h1>
          <ul
            role="list"
            className="flex flex-row flex-wrap sm:flex-col justify-center sm:justify-start gap-x-4 sm:gap-0"
          >
            <li className="flex flex-row justify-between">
              <h1>10AM:</h1>
              <h1>1000</h1>
            </li>
            <li className="flex flex-row justify-between">
              <h1>9AM:</h1>
              <h1>800</h1>
            </li>
            <li className="flex flex-row justify-between">
              <h1>1PM:</h1>
              <h1>600</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPieChart;
