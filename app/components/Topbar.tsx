"use client";

const Topbar = () => {
  return (
    <div className="flex-row w-full hidden lg:block justify-between px-4 py-3 font-[family-name:var(--font-prompt)] selection:bg-[var(--purple)] selection:text-white">
      <h1 className="font-bold text-white text-lg">
        SUBAY: A Multi-Camera Detection System for Customer Tracking
      </h1>
      <h3 className="font-medium text-[var(--gray)] text-xs">
        An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon
      </h3>
    </div>
  );
};

export default Topbar;
