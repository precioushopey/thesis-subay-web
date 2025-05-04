import React from "react";

const HeatmappingPage = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <div className="w-full h-full flex flex-col sm:flex-row bg-white dark:bg-[var(--navyblue)] rounded-md gap-4 p-4">
        <div className="h-full w-[1/2] flex flex-col gap-y-4">
          <h1 className="font-semibold text-base">Camera Feed</h1>
          <div className="relative pb-[56%] overflow-hidden h-full sm:h-[363.333px] w-full sm:w-[545px] border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <iframe
              src="http://172.20.23.253:5001/video_feed/heatmap"
              className="w-full object-cover h-full  absolute top-0 left-0 right-0 bottom-0"
            >
              Your browser does not support the video tag.
            </iframe>
          </div>
        </div>
        <div className="h-full w-[1/2] flex flex-col gap-y-4">
          <h1 className="font-semibold text-base">Heatmap Overlay</h1>
          <div className="h-full sm:h-[363.333px] w-full sm:w-[545px] border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <iframe
              src="http://172.20.23.253:5001/video_feed/triplines"
              className="w-full object-cover h-full"
            >
              Your browser does not support the video tag.
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatmappingPage;
