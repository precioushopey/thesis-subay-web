import React, { useMemo } from "react";
import { MdFlag } from "react-icons/md";
import { parseISO, format } from "date-fns";
import { pieChartData } from "@/app/lib/pieChartData";
import {
  zoneAChartData,
  zoneBChartData,
  zoneCChartData,
  zoneDChartData,
  zoneEChartData,
  zoneFChartData,
  zoneGChartData,
} from "@/app/lib/zoneChartData";

const PeakMetricsCard: React.FC = () => {
  const { peakDay, peakZone } = useMemo(() => {
    const peakDayEntry = pieChartData.reduce((max, curr) =>
      curr.value > max.value ? curr : max
    );

    const zoneMap = {
      "Zone A": zoneAChartData,
      "Zone B": zoneBChartData,
      "Zone C": zoneCChartData,
      "Zone D": zoneDChartData,
      "Zone E": zoneEChartData,
      "Zone F": zoneFChartData,
      "Zone G": zoneGChartData,
    };

    const totalVisitsPerZone = Object.entries(zoneMap).map(([zone, data]) => {
      const totalVisits = data.reduce((sum, curr) => sum + curr.visits, 0);
      return { zone, totalVisits };
    });

    const peakZoneEntry = totalVisitsPerZone.reduce((max, curr) =>
      curr.totalVisits > max.totalVisits ? curr : max
    );

    return {
      peakDay: peakDayEntry.date,
      peakZone: peakZoneEntry.zone,
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
          <h1 className="text-sm">Peak Zone</h1>
        </div>
        <h1 className="items-center justify-center text-2xl font-semibold">
          {peakZone}
        </h1>
      </div>
    </div>
  );
};

export default PeakMetricsCard;
