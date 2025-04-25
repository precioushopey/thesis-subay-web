"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import Link from "next/link";
import ChartHeight from "./ChartHeight";
import DatePicker from "./DatePicker";
import ExpandButton from "./ExpandButton";
import AisleChart from "./AisleChart";
import { barChartData } from "@/app/lib/barChartData";
import { MdArrowOutward } from "react-icons/md";
import { isWithinInterval, parseISO, startOfDay, endOfDay } from "date-fns";
import {
  aisleAChartData,
  aisleBChartData,
  aisleCChartData,
  aisleDChartData,
  aisleEChartData,
  aisleFChartData,
} from "@/app/lib/aisleChartData";
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

type AggregatedData = {
  aisle: string;
  visits: number;
  dwell_time: number;
};

const AnalyticsBarChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartHeight = ChartHeight(page);
  const chartRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [filteredData, setFilteredData] = useState<AggregatedData[]>(() => {
    const initialAggregatedData: Record<
      string,
      { visits: number; dwell_time: number }
    > = {};

    barChartData.forEach((item) => {
      if (!initialAggregatedData[item.aisle]) {
        initialAggregatedData[item.aisle] = { visits: 0, dwell_time: 0 };
      }
      initialAggregatedData[item.aisle].visits += item.visits;
      initialAggregatedData[item.aisle].dwell_time += item.dwell_time;
    });

    return Object.entries(initialAggregatedData).map(([aisle, values]) => ({
      aisle,
      visits: values.visits,
      dwell_time: values.dwell_time,
    }));
  });

  const COLORS_LIGHT = [
    "#0396A6",
    "#9CD3D8",
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

  const filterAndAggregateData = (
    from: string,
    to: string
  ): AggregatedData[] => {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const filteredData = barChartData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= fromDate && itemDate <= toDate;
    });

    const aggregatedData: Record<
      string,
      { visits: number; dwell_time: number }
    > = {};

    filteredData.forEach((item) => {
      if (!aggregatedData[item.aisle]) {
        aggregatedData[item.aisle] = { visits: 0, dwell_time: 0 };
      }
      aggregatedData[item.aisle].visits += item.visits;
      aggregatedData[item.aisle].dwell_time += item.dwell_time;
    });

    return Object.entries(aggregatedData).map(([aisle, values]) => ({
      aisle,
      visits: values.visits,
      dwell_time: values.dwell_time,
    }));
  };

  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      const newData = filterAndAggregateData(dateRange.from, dateRange.to);
      setFilteredData(newData);
    }
  }, [dateRange]);

  const aisleData = {
    "Aisle A": aisleAChartData,
    "Aisle B": aisleBChartData,
    "Aisle C": aisleCChartData,
    "Aisle D": aisleDChartData,
    "Aisle E": aisleEChartData,
    "Aisle F": aisleFChartData,
  };

  const filteredaisleData = useMemo(() => {
    if (!dateRange) return aisleData;

    const start = startOfDay(dateRange.from);
    const end = endOfDay(dateRange.to);

    const filtered = {} as typeof aisleData;

    Object.entries(aisleData).forEach(([aisle, data]) => {
      filtered[aisle as keyof typeof aisleData] = data.filter((d) => {
        const date = parseISO(d.date);
        return isWithinInterval(date, { start, end });
      });
    });

    return filtered;
  }, [dateRange]);

  const aisleEntries = Object.entries(filteredaisleData);
  const firstThree = aisleEntries.slice(0, 3);
  const remaining = aisleEntries.slice(3);

  const chartContents =
    page === "dashboard" ? (
      // DASHBOARD VIEW
      <div
        ref={chartRef}
        className="relative rounded-md bg-white dark:bg-[var(--navyblue)] p-4"
        style={{ height: chartHeight }}
      >
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium text-sm">
            Aisle-Based Foot Traffic and Dwell Time
          </h1>
          <Link
            href={"/analytics"}
            className="flex flex-row items-center gap-x-2"
          >
            <button className="rounded-md p-1 bg-[var(--softcyan)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110">
              <MdArrowOutward size={16} className="text-white" />
            </button>
          </Link>
        </div>
        <div className="text-[10px] h-full -mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ left: -25 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={theme === "dark" ? "#AEB9E1" : "#0B698B"}
              />
              <XAxis
                dataKey="aisle"
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
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "25px",
                  color: theme === "dark" ? "#AEB9E1" : "#0B698B",
                }}
              />
              <Bar
                dataKey="visits"
                fill={theme === "dark" ? "#7F25FB" : "#0396A6"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
              />
              <Bar
                dataKey="dwell_time"
                fill={theme === "dark" ? "#CB3CFF" : "#9CD3D8"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#F1C40F" stroke="#FFF" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    ) : (
      // ANALYTICS PAGE VIEW
      <div
        ref={chartRef}
        className="relative h-full rounded-md bg-white dark:bg-[var(--navyblue)] py-4"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2 px-4">
          <h1 className="text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium text-sm">
            Aisle-Based Foot Traffic and Dwell Time
          </h1>
          <div className="flex flex-row items-center gap-x-2">
            <DatePicker onRangeChange={setDateRange} />
            <ExpandButton label="Expand Bar Chart" chartType="bar" />
          </div>
        </div>
        <div className="text-[10px] h-full -mt-2 px-4">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={filteredData} margin={{ left: -25 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={theme === "dark" ? "#AEB9E1" : "#0B698B"}
              />
              <XAxis
                dataKey="aisle"
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
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "25px",
                  color: theme === "dark" ? "#AEB9E1" : "#0B698B",
                }}
              />
              <Bar
                dataKey="visits"
                fill={theme === "dark" ? "#7F25FB" : "#0396A6"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
              />
              <Bar
                dataKey="dwell_time"
                fill={theme === "dark" ? "#CB3CFF" : "#9CD3D8"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#F1C40F" stroke="#FFF" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* aisle Charts */}
        <div className="w-full h-full flex flex-col rounded-b-md bg-white dark:bg-[var(--navyblue)] gap-4 px-4 pb-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            {firstThree.map(([label, data]) => (
              <AisleChart key={label} label={label} data={data} />
            ))}
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            {remaining.map(([label, data]) => (
              <AisleChart key={label} label={label} data={data} />
            ))}
          </div>
        </div>
      </div>
    );

  return <div>{chartContents}</div>;
};

export default AnalyticsBarChart;
