"use client";

const Topbar = () => {
  return (
    <div className="flex-row w-full hidden lg:block justify-between p-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white">
      <h1 className="font-bold text-[var(--bluetext)] dark:text-white text-lg">
        SUBAY: A Multi-Camera Detection System for Customer Tracking
      </h1>
      <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-xs">
        An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon
      </h1>
    </div>
  );
};

export default Topbar;
