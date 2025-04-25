// insights-report.ts
import { generateInsights } from './generateInsights';

window.addEventListener('DOMContentLoaded', async () => {
  const insights = await generateInsights();

  document.getElementById('totalFootTraffic')!.textContent = insights.totalFootTraffic.toString();
  document.getElementById('peakDayEntry')!.textContent = insights.peakDayEntry.toString();
  document.getElementById('peakDay')!.textContent = insights.peakDay;
  document.getElementById('peakDayValue')!.textContent = insights.peakDayValue.toString();
  document.getElementById('peakDayPercent')!.textContent = `${insights.peakDayPercent}%`;
  document.getElementById('topaisle')!.textContent = insights.topaisle;
  document.getElementById('topaisleValue')!.textContent = insights.topaisleValue.toString();
  document.getElementById('topaislePercent')!.textContent = `${insights.topaislePercent}%`;
  document.getElementById('longestDwellaisle')!.textContent = insights.longestDwellaisle;
  document.getElementById('longestDwellTime')!.textContent = `${insights.longestDwellTime.toFixed(2)}s`;
  document.getElementById('totalDwellTime')!.textContent = `${insights.totalDwellTime.toFixed(2)}s`;
  document.getElementById('averageDwellTime')!.textContent = `${insights.averageDwellTime}s`;
});
