"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Clock = () => {
  const [ctime, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full sm:w-1/2 flex flex-col items-end justify-end p-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <h1 className="font-semibold dark:text-white text-lg">{ctime}</h1>
      <div className="flex flex-row gap-x-2 text-xs font-semibold dark:font-medium dark:text-[var(--periwinkle)]">
        <h1>{format(new Date(), "eeee")}, </h1>
        <h1>{format(new Date(), "MMM dd, yyyy")}</h1>
      </div>
    </div>
  );
};

export default Clock;
