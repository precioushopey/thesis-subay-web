import React from "react";
import Image from "next/image";

const HeatmappingPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <div className="w-full h-fit flex flex-col sm:flex-row bg-white dark:bg-[var(--navyblue)] rounded-md">
        <div className="h-full w-full sm:w-1/2 flex flex-col py-4 pl-4 pr-2">
          <h1 className="font-semibold text-base pb-2">Camera Feed</h1>
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
        <div className="h-full w-full sm:w-1/2 flex flex-col py-4 pr-4 pl-2">
          <h1 className="font-semibold text-base pb-2">Heatmap Overlay</h1>
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
      </div>
      <div className="w-full h-fit flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
        <h1 className="font-semibold text-base pb-2">Performance Metrics</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-x-4">
          {["MOTA", "MOTP", "IDR/IDP", "IDF1"].map((item: any) => (
            <div
              key={item}
              className="w-full flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-3 mb-4 sm:mb-0"
            >
              <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
                {item}
              </h1>
              <h1 className="text-center text-6xl font-semibold">00</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatmappingPage;
