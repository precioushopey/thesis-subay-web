"use client";
import React, { useEffect } from "react";
import { db } from "../firebase/config";
import { onValue, ref } from "firebase/database";

type AnalysisMetric = {
  label: string;
  value: number | string;
};

function LiveAnalyticsAnalysis() {
  const [totalCustomers, setTotalCustomers] = React.useState(0);
  const [currentCustomers, setCurrentCustomers] = React.useState(0);
  const [totalAisleVisits, setTotalAisleVisits] = React.useState(0);
  const [averageDwellTime, setAverageDwellTime] = React.useState(0);

  useEffect(() => {
    const query = ref(db, "/analytics/summary");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setTotalCustomers(data.total_customers);
        setCurrentCustomers(data.current_customers);
        setTotalAisleVisits(data.total_isle_visits);
        setAverageDwellTime(data.average_dwell_time);
      }
    });
  }, []);

  const analysisMetrics: AnalysisMetric[] = [
    { label: "Total Customers", value: totalCustomers },
    { label: "Current Customers", value: currentCustomers },
    { label: "Total Aisle Visits", value: totalAisleVisits },
    { label: "Average Dwell Time (secs)", value: averageDwellTime },
  ];

  return (
    <div className="h-fit card sm:w-[300px] gap-y-4">
      <h1 className="font-semibold text-base">Analysis</h1>
      {analysisMetrics.map((metric, idx) => (
        <div key={idx} className="cells">
          <h1 className="descriptions text-sm">{metric.label}</h1>
          <h1 className="text-center text-6xl font-semibold">{metric.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default LiveAnalyticsAnalysis;
