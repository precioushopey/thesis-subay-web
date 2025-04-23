import LiveAnalyticsAnalysis from "@/app/components/LiveAnalyticsAnalysis";
import LiveAnalyticsIFrame from "@/app/components/LiveAnalyticsIFrame";
import React from "react";

const LiveAnalyticsPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <LiveAnalyticsIFrame />
      <LiveAnalyticsAnalysis />
    </div>
  );
};

export default LiveAnalyticsPage;
