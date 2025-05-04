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
    <div className="w-full sm:w-1/2 flex flex-row items-center justify-end p-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white">
      <h1 className="font-bold text-[var(--bluetext)] dark:text-white text-4xl">
        {ctime}
      </h1>
      <div className="flex flex-row gap-x-2 font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-xs">
        <h1>{format(new Date(), "eeee")}, </h1>
        <h1>{format(new Date(), "MMM dd, yyyy")}</h1>
      </div>
    </div>
  );
};

export default Clock;
