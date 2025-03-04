"use client";
import ExportButton from "./ExportButton";
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
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const AnalyticsBarChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartHeight = page === "dashboard" ? 175 : 350;

  return (
    <div
      className="rounded-md bg-[#0B1739] p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer"
      style={{ height: chartHeight }}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">Analytics Bar</h1>
        <ExportButton />
      </div>
      <div className="text-[10px] h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 15, bottom: 15, left: -22 }}>
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
              dataKey="pv"
              fill="#CB3CFF"
              legendType="circle"
              radius={[5, 5, 0, 0]}
              activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
            />
            <Bar
              dataKey="uv"
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
