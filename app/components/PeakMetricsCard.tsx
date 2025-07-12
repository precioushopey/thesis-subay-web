"use client";
import React, { useMemo } from "react";
import { MdFlag } from "react-icons/md";
import {
  zoneAChartData,
  zoneBChartData,
  zoneCChartData,
  zoneDChartData,
  zoneEChartData,
  zoneFChartData,
} from "@/app/lib/zoneChartData";

const PeakMetricsCard: React.FC = () => {
  const { peakVisit, peakDwell } = useMemo(() => {
    const zoneMap = {
      "Aisle A": zoneAChartData,
      "Aisle B": zoneBChartData,
      "Aisle C": zoneCChartData,
      "Aisle D": zoneDChartData,
      "Aisle E": zoneEChartData,
      "Aisle F": zoneFChartData,
    };

    const totalPerZone = Object.entries(zoneMap).map(([zone, data]) => {
      const totalVisits = data.reduce((sum, curr) => sum + curr.visits, 0);
      const totalDwell = data.reduce((sum, curr) => sum + curr.dwell_time, 0);
      return { zone, totalVisits, totalDwell };
    });

    const peakVisitEntry = totalPerZone.reduce((max, curr) =>
      curr.totalVisits > max.totalVisits ? curr : max
    );

    const peakDwellEntry = totalPerZone.reduce((max, curr) =>
      curr.totalDwell > max.totalDwell ? curr : max
    );

    return {
      peakVisit: peakVisitEntry.zone,
      peakDwell: peakDwellEntry.zone,
    };
  }, []);

  return (
    <div className="w-full md:w-1/3 h-full flex flex-col gap-4">
      <div className="card h-full items-start gap-y-2">
        <div className="descriptions text-sm flex flex-row items-center gap-x-2">
          <MdFlag size={18} />
          <h1 className="text-sm">Peak Visit Aisle</h1>
        </div>
        <h1 className="items-center justify-center text-[var(--bluetext)] dark:text-white text-2xl font-semibold">
          {peakVisit}
        </h1>
      </div>
      <div className="card h-full items-start gap-y-2">
        <div className="descriptions text-sm flex flex-row items-center gap-x-2">
          <MdFlag size={18} />
          <h1 className="text-sm">Peak Dwell Aisle</h1>
        </div>
        <h1 className="items-center justify-center text-[var(--bluetext)] dark:text-white text-2xl font-semibold">
          {peakDwell}
        </h1>
      </div>
    </div>
  );
};

export default PeakMetricsCard;
