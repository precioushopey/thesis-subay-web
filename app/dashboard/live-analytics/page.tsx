import React from "react";

const LiveAnalyticsPage = () => {
  return (
    <div className="container">
      <iframe
        src="https://www.youtube.com/embed/9hxMyvhvT-k?playlist=9hxMyvhvT-k&loop=1&autoplay=1&mute=1&controls=0"
        title="Live Analytics"
        allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-[120/61] object-cover rounded-md"
      />
      <div className="space-y-2 text-xs">
        <strong>Disclaimer:</strong>
        <p className="italic">
          This Real-Time Analysis page was developed solely to demonstrate the
          customer counting module, showcasing the object detection, tracking,
          and re-identification capabilities of the system. It was used for
          presentation purposes during the final defense and to support live
          demonstrations when needed. As stated in the thesis, the scope of this
          study is limited to post-event analysis. Thus, real-time analytics are
          not part of the system&apos;s official implementation.
        </p>
      </div>
    </div>
  );
};

export default LiveAnalyticsPage;
