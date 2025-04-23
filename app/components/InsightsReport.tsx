// components/InsightsReport.tsx
import React from "react";

interface InsightsReportProps {
  insights: {
    summary: string;
    peak: string;
    low: string;
    recommendation: string;
  };
  totalFootTraffic: number;
  peakDay: string;
  peakHour: string;
}

const InsightsReport = React.forwardRef<HTMLDivElement, InsightsReportProps>(
  ({ insights, totalFootTraffic, peakDay, peakHour }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[794px] h-[1123px] bg-white text-[#0c0c0c] p-8 font-sans text-sm leading-relaxed"
      >
        <h1 className="text-4xl font-bold">INSIGHTS REPORT</h1>
        <p className="text-gray-500 mb-4">MON, 12 FEB 2030</p>

        {/* Overview */}
        <div className="flex items-center gap-6 mb-6">
          <div className="bg-black text-white px-3 py-1 text-xs font-semibold rounded">
            OVERVIEW
          </div>
          <div>
            <p className="text-xs text-gray-600">Peak Day</p>
            <p className="font-bold text-lg">{peakDay}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600">Peak Hour</p>
            <p className="font-bold text-lg">{peakHour}</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-1">Insights Summary</h2>
          <p>{insights.summary}</p>
          <p>{insights.peak}</p>
          <p>{insights.low}</p>
          <p>{insights.recommendation}</p>
        </div>

        {/* Metrics (Placeholder for Chart Images or SVGs) */}
        <div className="mt-6">
          <p className="text-md font-semibold mb-2">
            Total Foot Traffic: {totalFootTraffic}
          </p>
          {/* You can replace this with an <img> or chart component */}
          <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Chart Image Placeholder
          </div>
        </div>

        {/* Add more styled sections as per your visual template */}
      </div>
    );
  }
);

export default InsightsReport;
