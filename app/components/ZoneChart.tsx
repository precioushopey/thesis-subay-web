"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const ZoneChart = ({ label, data }: { label: String; data: any }) => {
  const COLORS_LIGHT = [
    "#8979FF",
    "#FF928A",
    "#3CC3DF",
    "#FFAE4C",
    "#537FF1",
    "#6FD195",
  ];
  const COLORS_DARK = ["#7F25FB", "#CB3CFF", "#0038FF", "#00C2FF"];

  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.classList.contains("dark") ? "dark" : "light";

    setTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const colors = theme === "dark" ? COLORS_DARK : COLORS_LIGHT;

  return (
    <div className="w-full h-[6rem]">
      <h1 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] font-semibold dark:font-medium text-xs">
        {label}
      </h1>
      <div className="text-[7px] h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, left: -35 }}>
            <CartesianGrid
              horizontal={true}
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme === "dark" ? "#AEB9E1" : "#0B698B"}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme === "dark" ? "#AEB9E1" : "#0B698B" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme === "dark" ? "#AEB9E1" : "#0B698B" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === "dark" ? "#081028" : "#F2F2F2",
                borderRadius: "5px",
                color: theme === "dark" ? "#FFF" : "#044F6C",
              }}
              itemStyle={{ color: theme === "dark" ? "#FFF" : "#044F6C" }}
              cursor={{
                fill:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              dataKey="visits"
              fill={theme === "dark" ? "#7F25FB" : "#0B698B"}
              legendType="none"
              radius={[5, 5, 0, 0]}
              activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
            />
            <Bar
              dataKey="dwell_time"
              fill={theme === "dark" ? "#CB3CFF" : "#0396A6"}
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

export default ZoneChart;
