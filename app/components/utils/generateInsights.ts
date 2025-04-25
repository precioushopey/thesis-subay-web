// generateInsights.ts

import { barChartData } from "@/app/lib/barChartData";
import { lineChartData } from "@/app/lib/lineChartData";
import { pieChartData } from "@/app/lib/pieChartData";

export async function generateInsights() {
  // 1. Total foot traffic during monitoring period (line chart)
  const totalFootTraffic = pieChartData.reduce((sum, d) => sum + d.value, 0);

  // 2. Day with most foot traffic and its value
  const peakDayEntry = pieChartData.reduce((max, d) => (d.value > max.value ? d : max));
  const peakDay = peakDayEntry.date;
  const peakDayValue = peakDayEntry.value;

  // 3. Percent of total traffic that occurred on the peak day
  const peakDayPercent = ((peakDayValue / totalFootTraffic) * 100).toFixed(2);

  // 4. aisle with most foot traffic and its percent (pie chart)
  const totalaisleTraffic = barChartData.reduce((sum, d) => sum + d.visits, 0);
  const topaisleEntry = barChartData.reduce((max, d) => (d.visits > max.visits ? d : max));
  const topaisle = topaisleEntry.aisle;
  const topaisleValue = topaisleEntry.visits;
  const topaislePercent = ((topaisleValue / totalaisleTraffic) * 100).toFixed(2);

  // 5. aisle with longest dwell time & average dwell time (bar chart)
  const totalDwellTime = barChartData.reduce((sum, d) => sum + d.dwell_time, 0);
  const averageDwellTime = (totalDwellTime / barChartData.length).toFixed(2);
  const longestDwellaisle = barChartData.reduce((max, d) => (d.dwell_time > max.dwell_time ? d : max));

  return {
    totalFootTraffic,
    peakDayEntry,
    peakDay,
    peakDayValue,
    peakDayPercent,
    topaisle,
    topaisleValue,
    topaislePercent,
    longestDwellaisle: longestDwellaisle.aisle,
    longestDwellTime: longestDwellaisle.dwell_time,
    totalDwellTime,
    averageDwellTime
  };
};
