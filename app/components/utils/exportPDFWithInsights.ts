import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type DataEntry = {
    date: string;
    value: number;
  };

export const generateFootTrafficInsights = (data: DataEntry[]) => {
  if (!data.length) return null;

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const average = total / data.length;
  const maxEntry = data.reduce((a, b) => (a.value > b.value ? a : b));
  const minEntry = data.reduce((a, b) => (a.value < b.value ? a : b));

  return {
    summary: `From ${data[0].date} to ${
      data[data.length - 1].date
    }, a total of ${total} customer entries were recorded. The average daily foot traffic was ${average.toFixed(
      2
    )}.`,
    peak: `The highest foot traffic occurred on ${maxEntry.date} with ${maxEntry.value} entries.`,
    low: `The lowest foot traffic was on ${minEntry.date} with ${minEntry.value} entries.`,
    recommendation:
      maxEntry.value > average * 1.2
        ? `Consider placing promotions or staff reinforcements on days like ${maxEntry.date} to leverage high traffic.`
        : `Foot traffic appears steady. Consider experiments like rearranging product displays or marketing pushes.`,
  };
};

export const exportPDFWithInsights = async (
    ref: HTMLElement,
    data: DataEntry[],
    filename = "analytics_report.pdf"
) => {
  const insights = generateFootTrafficInsights(data);
  if (!insights) return;

  const canvas = await html2canvas(ref);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = 180;
  const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.setFontSize(14);
  pdf.text("Analytics Report: Foot Traffic", 15, 15);

  pdf.setFontSize(12);
  pdf.text("Insights Summary:", 15, 25);
  pdf.setFontSize(10);
  pdf.text(insights.summary, 15, 32);
  pdf.text(insights.peak, 15, 40);
  pdf.text(insights.low, 15, 48);
  pdf.text(insights.recommendation, 15, 56);

  pdf.addImage(imgData, "PNG", 15, 70, pdfWidth, imgHeight);
  pdf.save(filename);
};
