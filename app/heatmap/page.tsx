import React from "react";
import Image from "next/image";

const HeatmapPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--purple)] selection:text-white">
      <div className="h-full w-full sm:w-4/5 flex flex-col bg-[var(--card)] rounded-md p-4">
        <h1 className="font-semibold text-base pb-2">Heatmap</h1>
        <div className="border border-[var(--gray)] rounded-md">
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
      <div className="h-full w-full sm:w-1/5 flex flex-col bg-[var(--card)] rounded-md p-4">
        <h1 className="font-semibold text-base pb-2">Analysis</h1>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[var(--gray)] rounded-t-md">
          01
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[var(--gray)]">
          02
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[var(--gray)]">
          03
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[var(--gray)] rounded-b-md">
          04
        </div>
      </div>
    </div>
  );
};

export default HeatmapPage;
