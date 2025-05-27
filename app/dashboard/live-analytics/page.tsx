import LiveAnalyticsAnalysis from "@/app/components/LiveAnalyticsAnalysis";
import LiveAnalyticsIFrame from "@/app/components/LiveAnalyticsIFrame";
import React from "react";

const LiveAnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <video
        controls
        preload="none"
        autoPlay
        loop
        muted
        className="w-full h-full rounded-md object-cover"
      >
        <source src="/liveAnalytics.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/*<LiveAnalyticsIFrame />
      <LiveAnalyticsAnalysis />*/}
    </div>
  );
};

export default LiveAnalyticsPage;
