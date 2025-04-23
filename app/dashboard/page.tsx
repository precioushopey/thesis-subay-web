import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 p-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-white font-medium">
      <Link
        href={"../dashboard/live-analytics"}
        className="w-full items-center justify-center bg-[var(--bluetext)] dark:bg-[var(--elecpurple)] rounded-md text-center p-8"
      >
        Live Analytics
      </Link>
      <Link
        href={"../dashboard/metrics"}
        className="w-full items-center justify-center bg-[var(--deepteal)] dark:bg-[var(--brimagenta)] rounded-md text-center p-8"
      >
        Metrics
      </Link>
      <Link
        href={"../dashboard/post-analytics"}
        className="w-full items-center justify-center bg-[var(--brightaqua)] dark:bg-[var(--royalblue)] rounded-md text-center p-8"
      >
        Post Analytics
      </Link>
      <Link
        href={"../dashboard/insights"}
        className="w-full items-center justify-center bg-[var(--softcyan)] dark:bg-[var(--cyanblue)] rounded-md text-center p-8"
      >
        Insights
      </Link>
      {/*<div className="w-1/3 flex flex-col gap-4">
        Real-Time Analytics
        <div className="flex flex-row gap-4">
          <Link
            href={"../dashboard/live-analytics"}
            className="w-full items-center justify-center bg-[var(--bluetext)] dark:bg-[var(--elecpurple)] rounded-md text-center p-8"
          >
            Live Analytics
          </Link>
          <Link
            href={"../dashboard/metrics"}
            className="w-full items-center justify-center bg-[var(--deepteal)] dark:bg-[var(--brimagenta)] rounded-md text-center p-8"
          >
            Metrics
          </Link>
        </div>
        Post-Event Analytics
        <div className="flex flex-row gap-4">
          <Link
            href={"../dashboard/post-analytics"}
            className="w-full items-center justify-center bg-[var(--brightaqua)] dark:bg-[var(--royalblue)] rounded-md text-center p-8"
          >
            Post Analytics
          </Link>
          <Link
            href={"../dashboard/insights"}
            className="w-full items-center justify-center bg-[var(--softcyan)] dark:bg-[var(--cyanblue)] rounded-md text-center p-8"
          >
            Insights
          </Link>
        </div>
      </div>*/}
    </div>
  );
};

export default DashboardPage;
