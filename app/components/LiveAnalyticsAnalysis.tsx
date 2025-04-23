"use client";
import React, { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/config";

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
        console.log("Data: ", data);
        setTotalCustomers(data.total_customers);
        setCurrentCustomers(data.current_customers);
        setTotalAisleVisits(data.total_isle_visits);
        setAverageDwellTime(data.average_dwell_time);
      }
    });
  }, []);

  return (
    <div className="h-full w-full sm:w-1/5 flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
      <h1 className="font-semibold text-sm pb-2">Analysis</h1>
      {/* {[
    "Total Costumers",
    "Current Customers",
    "Total Aisle Visits",
    "Average Dwell Time",
  ].map((item: any) => (
    <div
      key={item}
      className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4"
    >
      <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
        {item}
      </h1>
      <h1 className="text-center text-6xl font-semibold">00</h1>
    </div>
  ))} */}
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
        <h1 className="content-end text-sm">Total Customers</h1>
        <h1 className="text-center text-6xl">{totalCustomers}</h1>
      </div>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
        <h1 className="content-end text-sm">Current Customers</h1>
        <h1 className="text-center text-6xl">{currentCustomers}</h1>
      </div>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
        <h1 className="content-end text-sm">Total Aisle Visits</h1>
        <h1 className="text-center text-6xl">{totalAisleVisits}</h1>
      </div>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
        <h1 className="content-end text-sm">Average Dwell Time</h1>
        <h1 className="text-center text-6xl">{averageDwellTime}</h1>
      </div>
    </div>
  );
}

export default LiveAnalyticsAnalysis;
