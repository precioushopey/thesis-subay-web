"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import DatePicker from "./DatePicker";
import ExportButton from "./ExportButton";
import ExpandButton from "./ExpandButton";
import ShelfChart from "./ShelfChart";
import { barChartData } from "@/app/lib/barChartData";
import { shelfChartData } from "@/app/lib/shelfChartData";
import { MdArrowOutward, MdCircle } from "react-icons/md";
import { isWithinInterval, parseISO, startOfDay, endOfDay } from "date-fns";
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
  shelf: string;
  visits: number;
  dwell_time: number;
};

const AnalyticsBarChart = ({ page }: { page: "dashboard" | "analytics" }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [filteredData, setFilteredData] = useState<AggregatedData[]>(() => {
    const initialAggregatedData: Record<
      string,
      { visits: number; dwell_time: number }
    > = {};

    barChartData.forEach((item) => {
      if (!initialAggregatedData[item.shelf]) {
        initialAggregatedData[item.shelf] = { visits: 0, dwell_time: 0 };
      }
      initialAggregatedData[item.shelf].visits += item.visits;
      initialAggregatedData[item.shelf].dwell_time += item.dwell_time;
    });

    return Object.entries(initialAggregatedData).map(([shelf, values]) => ({
      shelf,
      visits: values.visits,
      dwell_time: values.dwell_time,
    }));
  });

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
      if (!aggregatedData[item.shelf]) {
        aggregatedData[item.shelf] = { visits: 0, dwell_time: 0 };
      }
      aggregatedData[item.shelf].visits += item.visits;
      aggregatedData[item.shelf].dwell_time += item.dwell_time;
    });

    return Object.entries(aggregatedData).map(([shelf, values]) => ({
      shelf,
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

  const filteredShelfData = useMemo(() => {
    if (!dateRange) return shelfChartData;
    return shelfChartData.filter((d) => {
      const date = parseISO(d.date);
      return isWithinInterval(date, {
        start: startOfDay(dateRange.from),
        end: endOfDay(dateRange.to),
      });
    });
  }, [dateRange]);

  const exportCSV = () => {
    const barChartHeader = ["Shelf", "Visits", "Dwell Time"];
    const barChartContent =
      "data:text/csv;charset=utf-8," +
      [barChartHeader.join(",")]
        .concat(
          filteredData.map(
            (row) => `${row.shelf},${row.visits},${row.dwell_time}`
          )
        )
        .join("\n");

    const shelfChartHeader = ["Date", "Long", "Medium", "Short"];
    const shelfChartContent =
      "data:text/csv;charset=utf-8," +
      [shelfChartHeader.join(",")]
        .concat(
          filteredShelfData.map(
            (row) => `${row.date},${row.long},${row.med},${row.short}`
          )
        )
        .join("\n");

    const barChartLink = document.createElement("a");
    barChartLink.setAttribute("href", encodeURI(barChartContent));
    barChartLink.setAttribute("download", "analytics_bar_chart.csv");
    document.body.appendChild(barChartLink);
    barChartLink.click();
    document.body.removeChild(barChartLink);

    setTimeout(() => {
      const shelfChartLink = document.createElement("a");
      shelfChartLink.setAttribute("href", encodeURI(shelfChartContent));
      shelfChartLink.setAttribute("download", "analytics_shelf_chart.csv");
      document.body.appendChild(shelfChartLink);
      shelfChartLink.click();
      document.body.removeChild(shelfChartLink);
    }, 100);
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

  const chartContents =
    page === "dashboard" ? (
      // DASHBOARD VIEW
      <div
        ref={chartRef}
        className="relative rounded-md bg-white dark:bg-[var(--navyblue)] p-4"
        style={{ height: window.innerHeight / 3.7 }}
      >
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[var(--bluetext)] dark:text-white font-semibold dark:font-medium text-sm">
            Shelf Visits vs. Dwell Time
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
                dataKey="shelf"
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
                fill={theme === "dark" ? "#7F25FB" : "#8979FF"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
              />
              <Bar
                dataKey="dwell_time"
                fill={theme === "dark" ? "#CB3CFF" : "#FF928A"}
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
            Shelf Visits vs. Dwell Time
          </h1>
          <div className="flex flex-row items-center gap-x-2">
            <DatePicker onRangeChange={setDateRange} />
            <ExportButton onExportCSV={exportCSV} onExportPNG={exportPNG} />
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
                dataKey="shelf"
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
                fill={theme === "dark" ? "#7F25FB" : "#8979FF"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#E74C3C" stroke="#FFF" />}
              />
              <Bar
                dataKey="dwell_time"
                fill={theme === "dark" ? "#CB3CFF" : "#FF928A"}
                legendType="circle"
                radius={[5, 5, 0, 0]}
                activeBar={<Rectangle fill="#F1C40F" stroke="#FFF" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Shelf Charts */}
        <div className="w-full h-full flex flex-col rounded-b-md bg-white dark:bg-[var(--navyblue)] gap-4 px-4 pb-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShelfChart label={"Shelf A"} data={filteredShelfData} />
            <ShelfChart label={"Shelf B"} data={filteredShelfData} />
            <ShelfChart label={"Shelf C"} data={filteredShelfData} />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShelfChart label={"Shelf D"} data={filteredShelfData} />
            <ShelfChart label={"Shelf E"} data={filteredShelfData} />
            <ShelfChart label={"Shelf F"} data={filteredShelfData} />
          </div>
          <ul className="flex flex-row items-center justify-center text-center gap-x-4">
            <li className="flex flex-row items-center text-[var(--softpurple)] dark:text-[var(--brimagenta)] text-[10px] gap-x-1">
              <MdCircle /> <h6>long</h6>
            </li>
            <li className="flex flex-row items-center text-[var(--softpink)] dark:text-[var(--royalblue)] text-[10px] gap-x-1">
              <MdCircle /> <h6>medium</h6>
            </li>
            <li className="flex flex-row items-center text-[var(--softblue)] dark:text-[var(--cyanblue)] text-[10px] gap-x-1">
              <MdCircle /> <h6>short</h6>
            </li>
          </ul>
        </div>
      </div>
    );

  return <div>{chartContents}</div>;
};

export default AnalyticsBarChart;
