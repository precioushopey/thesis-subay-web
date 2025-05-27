import React from "react";

const HeatmappingPage = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <iframe
        src="https://www.youtube.com/embed/5hH3Say3UNM?playlist=5hH3Say3UNM&loop=1&autoplay=1&mute=1&controls=0"
        title="Heat Mapping"
        allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-[1920/737] object-cover rounded-md"
      />
      {/*<video
        controls
        preload="none"
        autoPlay
        loop
        muted
        className="w-full h-full rounded-md object-cover"
      >
        <source src="/heatmapping.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full flex flex-col sm:flex-row bg-white dark:bg-[var(--navyblue)] rounded-md gap-4 p-4">
        <div className="h-full w-[1/2] flex flex-col gap-y-4">
          <h1 className="font-semibold text-base">Camera Feed</h1>
          <div className="relative pb-[56%] overflow-hidden h-full sm:h-[363.333px] w-full sm:w-[545px] border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <iframe
              src="http://172.20.23.221:5001/video_feed/heatmap"
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
              src="http://172.20.23.221:5001/video_feed/triplines"
              className="w-full object-cover h-full"
            >
              Your browser does not support the video tag.
            </iframe>
          </div>
        </div>
      </div>*/}
      <div className="text-xs">
        <strong>Disclaimer:</strong>
        <p className="italic mt-2">
          This Real-Time Analysis page was developed solely to demonstrate the
          customer counting module, showcasing the object detection, tracking,
          and re-identification capabilities of the system. It was used for
          presentation purposes during the final defense and to support live
          demonstrations when needed. As stated in the thesis, the scope of this
          study is limited to post-event analysis. Thus, real-time analytics are
          not part of the system's official implementation.
        </p>
      </div>
    </div>
  );
};

export default HeatmappingPage;
