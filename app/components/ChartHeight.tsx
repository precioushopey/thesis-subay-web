"use client";
import { useEffect, useState } from "react";

const useChartHeight = (page: "analytics" | "insights") => {
  const [chartHeight, setChartHeight] = useState<number>(300);

  useEffect(() => {
    const updateHeight = () => {
      const height =
        page === "analytics"
          ? window.innerHeight / 3.7
          : window.innerHeight / 2;
      setChartHeight(height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [page]);

  return chartHeight;
};

export default useChartHeight;
