import React from "react";

const LiveAnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <iframe
        src="https://www.youtube.com/embed/9hxMyvhvT-k?playlist=9hxMyvhvT-k&loop=1&autoplay=1&mute=1&controls=0"
        title="Live Analytics"
        allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-[120/61] object-cover rounded-md"
      />

      {/*<video
        controls
        preload="none"
        autoPlay
        loop
        muted
        className="w-full h-full rounded-md object-cover"
      >
        <source src="/liveAnalytics.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
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

export default LiveAnalyticsPage;
