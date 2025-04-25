import React, { useMemo } from "react";
import { MdFlag } from "react-icons/md";
import { parseISO, format } from "date-fns";
import { pieChartData } from "@/app/lib/pieChartData";
import {
  aisleAChartData,
  aisleBChartData,
  aisleCChartData,
  aisleDChartData,
  aisleEChartData,
  aisleFChartData,
} from "@/app/lib/aisleChartData";

const PeakMetricsCard: React.FC = () => {
  const { peakDay, peakaisle } = useMemo(() => {
    const peakDayEntry = pieChartData.reduce((max, curr) =>
      curr.value > max.value ? curr : max
    );

    const aisleMap = {
      "Aisle A": aisleAChartData,
      "Aisle B": aisleBChartData,
      "Aisle C": aisleCChartData,
      "Aisle D": aisleDChartData,
      "Aisle E": aisleEChartData,
      "Aisle F": aisleFChartData,
    };

    const totalVisitsPeraisle = Object.entries(aisleMap).map(
      ([aisle, data]) => {
        const totalVisits = data.reduce((sum, curr) => sum + curr.visits, 0);
        return { aisle, totalVisits };
      }
    );

    const peakaisleEntry = totalVisitsPeraisle.reduce((max, curr) =>
      curr.totalVisits > max.totalVisits ? curr : max
    );

    return {
      peakDay: peakDayEntry.date,
      peakaisle: peakaisleEntry.aisle,
    };
  }, []);

  return (
    <div className="w-full md:w-1/3 h-full flex flex-row sm:flex-col gap-4">
      <div className="w-full h-full flex flex-col items-start bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-2 p-4">
        <div className="flex flex-row items-center gap-x-2 font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)]">
          <MdFlag size={18} />
          <h1 className="text-sm">Peak Day</h1>
        </div>
        <h1 className="items-center justify-center text-2xl font-semibold">
          {format(parseISO(peakDay), "MMMM d")}
        </h1>
      </div>

      <div className="w-full h-full flex flex-col items-start bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-2 p-4">
        <div className="flex flex-row items-center gap-x-2 font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)]">
          <MdFlag size={18} />
          <h1 className="text-sm">Peak aisle</h1>
        </div>
        <h1 className="items-center justify-center text-2xl font-semibold">
          {peakaisle}
        </h1>
      </div>
    </div>
  );
};

export default PeakMetricsCard;
