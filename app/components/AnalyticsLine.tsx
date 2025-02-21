"use client";
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
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const AnalyticsLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data} margin={{ left: -17 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tick={{ fill: "#AEB9E1" }}
        />
        <YAxis tick={{ fill: "#AEB9E1" }} />
        <Tooltip
          contentStyle={{ backgroundColor: "#081028", color: "#FFF" }}
          itemStyle={{ color: "#FFF" }}
          cursor={{ stroke: "#FFF", strokeWidth: 2 }}
        />
        <Legend wrapperStyle={{ color: "#AEB9E1" }} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#CB3CFF"
          activeDot={{ r: 8, fill: "#CB3CFF", stroke: "#FFF", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#00C2FF"
          activeDot={{ r: 8, fill: "#00C2FF", stroke: "#FFF", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsLineChart;
