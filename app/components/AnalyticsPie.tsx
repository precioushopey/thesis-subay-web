"use client";
import ExportButton from "./ExportButton";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const COLORS = ["#CB3CFF", "#0038FF", "#00C2FF"];

const AnalyticsPieChart = () => {
  return (
    <div className="rounded-md bg-[#0B1739] p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-sm font-medium text-white">Analytics Pie</h1>
        <ExportButton />
      </div>
      <div className="text-[10px]">
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
      </div>
    </div>
  );
};

export default AnalyticsPieChart;
