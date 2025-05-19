import { format } from 'date-fns';
import { barChartData } from "@/app/lib/barChartData";
import { pieChartData } from "@/app/lib/pieChartData";

export async function generateInsights() {
  // 1. Total foot traffic during monitoring period
  const totalFootTraffic = pieChartData.reduce((sum, d) => sum + d.value, 0);

  // 2. Day with most foot traffic and its value
  const peakDayEntry = pieChartData.reduce((max, d) =>
    d.value > max.value ? d : max
  );
  const peakDay = format(new Date(peakDayEntry.date), 'MMMM d, yyyy');
  const peakDayValue = peakDayEntry.value;

  // 3. Percent of total traffic that occurred on the peak day
  const peakDayPercent = ((peakDayValue / totalFootTraffic) * 100).toFixed(2);

  // 4. Aisle with most foot traffic and its percent
  const totalAisleTraffic = barChartData.reduce((sum, d) => sum + d.visits, 0);
  const topAisleEntry = barChartData.reduce((max, d) =>
    d.visits > max.visits ? d : max
  );
  const topAisle = topAisleEntry.zone;
  const topAisleValue = barChartData
    .filter(d => d.zone === topAisle)
    .reduce((sum, d) => sum + d.visits, 0);
  const topAislePercent = ((topAisleValue / totalAisleTraffic) * 100).toFixed(2);

  const lowAisleEntry = barChartData.reduce((min, d) =>
    d.visits < min.visits ? d : min
  );
  const lowAisle = lowAisleEntry.zone;
  const lowAisleValue = lowAisleEntry.visits;

  // 5. Dwell time: average and longest zone
  const totalDwellTime = barChartData.reduce((sum, d) => sum + d.dwell_time, 0);
  const averageDwellTime = (totalDwellTime / barChartData.length).toFixed(2);
  const longestDwellAisle = barChartData.reduce((max, d) =>
    d.dwell_time > max.dwell_time ? d : max
  );
  const longestDwellZone = longestDwellAisle.zone;
  const longestDwellTime = barChartData
    .filter(d => d.zone === longestDwellZone)
    .reduce((sum, d) => sum + d.dwell_time, 0)
    .toFixed(2);
  const longestDwellZoneVisits = barChartData
    .filter(d => d.zone === longestDwellZone)
    .reduce((sum, d) => sum + d.visits, 0)
    .toFixed(2);
  const longestDwellAverage = (parseFloat(longestDwellTime) / parseFloat(longestDwellZoneVisits)).toFixed(2);

  const shortestDwellAisle = barChartData.reduce((min, d) =>
    d.dwell_time < min.dwell_time ? d : min
  );
  const lowAverageDwellAisle = shortestDwellAisle.zone;
  const lowAverageDwellAisleValue = shortestDwellAisle.dwell_time;

  // 6. Zone Engagement Rate (average visits per zone)
  const zoneEngagementRate = (totalAisleTraffic / barChartData.length).toFixed(2);

  // 7. Customer Flow Efficiency (zones visited / total possible zones)
  const maxFlow = barChartData.length * pieChartData.length;
  const observedFlow = totalAisleTraffic;
  const customerFlowEfficiency = ((observedFlow / maxFlow) * 100).toFixed(2);

  // 8. Threshold Basis
  const avgDailyFootTraffic = (totalFootTraffic / pieChartData.length).toFixed(2);
  const avgCustomerDwellTime = (totalDwellTime / barChartData.length).toFixed(2);

  // --- Logic-based Insights ---
  const conclusions: string[] = [];
  const recommendations: string[] = [];

  if (parseFloat(avgDailyFootTraffic) < 50 || parseFloat(avgCustomerDwellTime) < 10) {
    // UNDERPERFORMING STORE SCENARIO
    conclusions.push(
      `The store is currently underperforming, with only an average of ${avgDailyFootTraffic} daily foot traffic and an average<br>dwell time of ${avgCustomerDwellTime} minutes. This suggests low customer engagement and insufficient time spent per visit.`
    );
  
    recommendations.push(
      `Re-evaluate the product layout in low-traffic aisles such as ${lowAisle}, which received significantly less<br>attention. Consider reorganizing shelf positions or moving popular items nearby to draw traffic.`,
      `Introduce targeted promotions in low-performing zones. For example, bundle<br>complementary items or provide discounts in ${lowAisle} to encourage movement and exploration.`,
      `Use high dwell-time zones like ${longestDwellZone} (average dwell time of ${longestDwellAverage} mins) to cross-promote slow-<br>moving products. Install promotional displays or suggest related items here to drive conversions.`,
      "Enhance the store ambiance by improving lighting, music, scent, or signage. A more<br>inviting environment can increase dwell time and improve overall browsing experience."
    );
  } else {
    // HEALTHY STORE SCENARIO
    conclusions.push(
      `The store is performing well, recording an average of ${avgDailyFootTraffic} daily foot traffic with an average dwell<br>time of ${avgCustomerDwellTime} minutes. This indicates healthy foot traffic and meaningful customer engagement.`
    );
  
    recommendations.push(
      `Leverage the success of ${topAisle}, which accounted for ${topAislePercent}% of all foot traffic.<br>Place new or high-margin products here to maximize visibility and drive sales.`,
      `Study the characteristics of ${longestDwellZone}, where customers spent an average of ${longestDwellAverage} minutes. Identify what makes this<br>zone engaging, such as layout, product type, or sensory elements, and replicate it in other underperforming zones.`,
      `While overall performance is strong, consider improving the layout or visual appeal of less-visited<br>aisles like ${lowAisle}. This will balance store flow and reduce congestion in high-traffic zones.`,
      `Establish a routine for weekly or monthly monitoring. Use these trends to make dynamic layout<br>decisions and prepare promotions aligned with peak traffic patterns (e.g., around ${peakDay}).`
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
    lowAisle,
    lowAisleValue,
    lowAverageDwellAisle,
    lowAverageDwellAisleValue,

    avgCustomerDwellTime,

    zoneEngagementRate,
    customerFlowEfficiency,
  };
}
