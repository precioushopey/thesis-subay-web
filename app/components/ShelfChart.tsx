"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const ShelfChart = ({ label, data }: { label: String; data: any }) => {
  return (
    <div className="w-full h-[6rem]">
      <h1 className="text-xs text-[var(--gray)]">{label}</h1>
      <div className="text-[7px] h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, left: -35 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#AEB9E1"
            />
            <XAxis
              dataKey="date"
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
            <Bar
              dataKey="long"
              stackId="a"
              fill="#CB3CFF"
              legendType="none"
              activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
            />
            <Bar
              dataKey="med"
              stackId="a"
              fill="#0038FF"
              legendType="none"
              activeBar={<Rectangle fill="#EC8825" stroke="#FFF" />}
            />
            <Bar
              dataKey="short"
              stackId="a"
              fill="#00C2FF"
              legendType="none"
              radius={[5, 5, 0, 0]}
              activeBar={<Rectangle fill="#F1C40F" stroke="#FFF" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShelfChart;
