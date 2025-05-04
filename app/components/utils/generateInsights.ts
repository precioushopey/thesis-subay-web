import { format } from 'date-fns';
import { barChartData } from "@/app/lib/barChartData";
import { pieChartData } from "@/app/lib/pieChartData";

interface PieChartDataEntry {
  date: string; // Format: "YYYY-MM-DD"
  value: number;
}

export async function generateInsights() {
  // 1. Total foot traffic during monitoring period (line chart)
  const totalFootTraffic = pieChartData.reduce((sum, d) => sum + d.value, 0);

  // 2. Day with most foot traffic and its value
  const peakDayEntry = pieChartData.reduce((max, d) =>
    d.value > max.value ? d : max
  );
  const peakDay = format(new Date(peakDayEntry.date), 'MMMM d, yyyy');
  const peakDayValue = peakDayEntry.value;

  // 3. Percent of total traffic that occurred on the peak day
  const peakDayPercent = ((peakDayValue / totalFootTraffic) * 100).toFixed(2);

  // 4. Aisle with most foot traffic and its percent (pie chart)
  const totalAisleTraffic = barChartData.reduce((sum, d) => sum + d.visits, 0);
  const topAisleEntry = barChartData.reduce((max, d) =>
    d.visits > max.visits ? d : max
  );
  const topAisle = topAisleEntry.zone;
  const topAisleValue = topAisleEntry.visits;
  const topAislePercent = ((topAisleValue / totalAisleTraffic) * 100).toFixed(
    2
  );

  const lowAisleEntry = barChartData.reduce((min, d) => 
    d.visits < min.visits ? d : min
  );
  const lowAisle = lowAisleEntry.zone;
  

  // 5. Aisle with longest dwell time & average dwell time (bar chart)
  const totalDwellTime = barChartData.reduce((sum, d) => sum + d.dwell_time, 0);
  const averageDwellTime = (totalDwellTime / barChartData.length).toFixed(2);
  const longestDwellAisle = barChartData.reduce((max, d) =>
    d.dwell_time > max.dwell_time ? d : max
  );

  const longestDwellZone = longestDwellAisle.zone;
  const longestDwellTime = longestDwellAisle.dwell_time;

  // 6. Conditional conclusion and recommendations based on traffic and dwell time
  const conclusions: string[] = [];
  const recommendations: string[] = [];

  if (totalFootTraffic < 50 || parseFloat(averageDwellTime) < 10) {
    conclusions.push(
      "The store is currently underperforming, with low total foot traffic and",
      "short average dwell time. This suggests limited customer engagement."
    )
    recommendations.push(
      `Reevaluate store layout. Aisles like ${lowAisle} have particularly low traffic.`,
      "Use targeted promotions in low-performing aisles to encourage exploration.",
      `Leverage high dwell zones like ${longestDwellZone} to cross-promote other products.`,
      "Improve ambiance (lighting, music, scent) to enhance the customer experience."
    );
  } else {
    conclusions.push(
      "The store has healthy engagement.",
      `${topAisle} is the busiest with ${topAislePercent}`,
      `of foot traffic, and ${longestDwellZone} has the highest dwell time.`
    )
    recommendations.push(
      `Feature promotions in ${topAisle} to leverage high visibility.`,
      `Study ${longestDwellZone}'s success and replicate its features in other zones.`,
      "Enhance low-performing aisles through better layout and visibility.",
      "Continue monitoring weekly trends to adapt dynamically."
    );
  }
  
  return {
    peakDayEntry,
    peakDay,
    peakDayValue,
    totalFootTraffic,
    topAisle,
    topAisleValue,
    totalDwellTime,
    averageDwellTime,
    longestDwellZone,
    longestDwellTime,
    peakDayPercent,
    topAislePercent,
    conclusions,
    recommendations,
  };
} 