import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type DataEntry = {
  date: string;
  value: number;
};

const totalVisitors = 1987;
const peakDay = "Saturday";
const peakaisle = "aisle B";
const peakDayFootTraffic = 432;
const peakaisleTraffic = 678;
const avgDwellTime = 5.8;
const longestDwellTimeaisle = "aisle A";
const longestDwellTime = 9.3;

export const exportPDFWithInsights = async (
  ref: HTMLElement,
  data: DataEntry[],
  filename = "RETAIL_ANALYTICS_INSIGHT_REPORT.pdf"
) => {
  const pdf = new jsPDF("p", "mm", "a4");
  const margin = 15;
  let cursorY = margin;

  // Title
  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("RETAIL ANALYTICS INSIGHT REPORT", margin, cursorY);
  cursorY += 7;
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text("[Date Selected]", margin, cursorY);
  cursorY += 10;

  // Statistical Highlights
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("Statistical Highlights:", margin, cursorY);
  cursorY += 7;

  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text(`- Total foot traffic recorded during the monitoring period: ${totalVisitors}`, margin, cursorY);
  cursorY += 6;
  pdf.text(`- Peak day: ${peakDay} had ${peakDayFootTraffic} visitors`, margin, cursorY);
  cursorY += 6;
  pdf.text(`- Peak aisle: ${peakaisle} with ${peakaisleTraffic} entries recorded`, margin, cursorY);
  cursorY += 6;
  pdf.text(`- Average customer dwell time across all aisles: ${avgDwellTime} minutes`, margin, cursorY);
  cursorY += 6;
  pdf.text(`- aisle with the longest dwell time: ${longestDwellTimeaisle}, averaging ${longestDwellTime} minutes`, margin, cursorY);
  cursorY += 10;

  // Interpretation
  const saturdayPct = ((peakDayFootTraffic / totalVisitors) * 100).toFixed(1);
  const aisleBPct = ((peakaisleTraffic / totalVisitors) * 100).toFixed(1);

  pdf.setFont("helvetica", "bold");
  pdf.text("Interpretation:", margin, cursorY);
  cursorY += 7;

  pdf.setFont("helvetica", "normal");
  pdf.text(`- On average, ${saturdayPct}% of total traffic occurred on ${peakDay}.`, margin, cursorY);
  cursorY += 6;
  pdf.text(`- ${peakaisle} accounted for ${aisleBPct}% of total entries, highlighting it as a high-engagement area.`, margin, cursorY);
  cursorY += 6;
  pdf.text(`- Dwell time suggests customers spend more time evaluating or interacting with displays in ${longestDwellTimeaisle}.`, margin, cursorY);
  cursorY += 10;

  // Recommendation
  pdf.setFont("helvetica", "bold");
  pdf.text("Recommendation:", margin, cursorY);
  cursorY += 7;

  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(0, 0, 255); // Blue color
  pdf.text(
    `- Consider placing promotions or staff reinforcements on days like ${data[data.length - 1].date} to leverage high traffic.`,
    margin,
    cursorY
  );
  pdf.setTextColor(0, 0, 0);
  cursorY += 10;

  // Render and insert chart/image from DOM element
  const canvas = await html2canvas(ref);
  const imgData = canvas.toDataURL("image/png");
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = 180;
  const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  if (cursorY + imgHeight > 280) {
    pdf.addPage();
    cursorY = margin;
  }

  pdf.addImage(imgData, "PNG", margin, cursorY, pdfWidth, imgHeight);
  pdf.save(filename);
};
