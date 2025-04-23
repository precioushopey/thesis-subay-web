import React from "react";

const LiveAnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <div className="h-full w-full sm:w-4/5 flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
        <h1 className="font-semibold text-base pb-2">Live Analytics</h1>
        <div className="border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
          <video
            controls
            preload="none"
            autoPlay
            loop
            muted
            className="w-full object-cover"
          >
            <source src="/camera_sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="h-full w-full sm:w-1/5 flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
        <h1 className="font-semibold text-sm pb-2">Analysis</h1>

        {[
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
        ))}
        {/* <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
          <h1 className="content-end text-sm">Costumer Count</h1>
          <h1 className="text-center text-6xl">00</h1>
        </div>
        <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
          <h1 className="content-end text-sm">Shelf Visits</h1>
          <h1 className="text-center text-6xl">00</h1>
        </div>
        <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
          <h1 className="content-end text-sm">Dwell Time</h1>
          <h1 className="text-center text-6xl">00</h1>
        </div>
        <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4">
          <h1 className="content-end text-sm">Accuracy</h1>
          <h1 className="text-center text-6xl">00</h1>
        </div> */}
      </div>
    </div>
  );
};

export default LiveAnalyticsPage;
