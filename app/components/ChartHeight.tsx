import { useEffect, useState } from "react";

const useChartHeight = (page: "dashboard" | "analytics") => {
  const [chartHeight, setChartHeight] = useState<number>(300); // Default fallback

  useEffect(() => {
    const updateHeight = () => {
      const height =
        page === "dashboard"
          ? window.innerHeight / 3.7
          : window.innerHeight / 2;
      setChartHeight(height);
    };

    updateHeight(); // Initial
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [page]);

  return chartHeight;
};

export default useChartHeight;
