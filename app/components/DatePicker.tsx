"use client";
import React, { useState, useEffect } from "react";
import { pieChartData } from "@/app/lib/pieChartData";
import { MdCalendarMonth, MdExpandMore } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const formatDateLabel = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

const getDefaultDates = () => {
  const minDate = new Date("2025-04-13");
  const minDateStr = minDate.toISOString().split("T")[0];
  const maxDate = new Date("2025-04-17");
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const today = new Date();
  const inThreeDays = new Date();
  inThreeDays.setDate(today.getDate() + 2);

  if (today > maxDate) {
    const lastDay = new Date(maxDate);
    const threeDaysBeforeLast = new Date(maxDate);
    threeDaysBeforeLast.setDate(maxDate.getDate() - 2);

    return {
      from: threeDaysBeforeLast.toISOString().split("T")[0],
      to: lastDay.toISOString().split("T")[0],
    };
  }

  if (inThreeDays > maxDate) {
    return {
      from: today > minDate ? today.toISOString().split("T")[0] : minDateStr,
      to: maxDateStr,
    };
  }

  return {
    from: today > minDate ? today.toISOString().split("T")[0] : minDateStr,
    to: inThreeDays.toISOString().split("T")[0],
  };
};

const DatePicker = ({
  onRangeChange,
  onDateChange,
}: {
  onRangeChange?: (range: { from: string; to: string }) => void;
  onDateChange?: (range: [Date, Date]) => void;
}) => {
  const minDate = "2025-04-13";
  const maxDate = "2025-04-17";

  const defaultDates = getDefaultDates();

  const [showPicker, setShowPicker] = useState(false);
  const [fromDate, setFromDate] = useState(defaultDates.from);
  const [toDate, setToDate] = useState(defaultDates.to);
  const [appliedFrom, setAppliedFrom] = useState(defaultDates.from);
  const [appliedTo, setAppliedTo] = useState(defaultDates.to);

  const togglePicker = () => setShowPicker((prev) => !prev);

  const handleApply = () => {
    setAppliedFrom(fromDate);
    setAppliedTo(toDate);
    setShowPicker(false);

    if (onRangeChange) onRangeChange({ from: fromDate, to: toDate });

    if (onDateChange) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      if (!isNaN(from.getTime()) && !isNaN(to.getTime())) {
        onDateChange([from, to]);
      }
    }
  };

  const displayLabel = `${formatDateLabel(appliedFrom)} - ${formatDateLabel(
    appliedTo
  )}`;

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange({ from: defaultDates.from, to: defaultDates.to });
    }
    if (onDateChange) {
      const from = new Date(defaultDates.from);
      const to = new Date(defaultDates.to);
      onDateChange([from, to]);
    }
  }, [onRangeChange, onDateChange]);

  return (
    <div className="relative text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)]">
      <button
        onClick={togglePicker}
        className="flex items-center gap-2 bg-[var(--offwhite)] dark:bg-[var(--darkbg)] px-3 py-1.5 rounded-md hover:brightness-120 transition"
      >
        <MdCalendarMonth size={14} />
        <span className="hover:text-[var(--deepteal)] dark:hover:text-white">
          {displayLabel}
        </span>
        <MdExpandMore size={16} />
      </button>

      {showPicker && (
        <div className="absolute top-8 right-0 z-10 flex flex-col sm:flex-row items-end gap-2 bg-[var(--offwhite)] dark:bg-[var(--darkbg)] p-2 rounded-md shadow-lg">
          <div className="flex flex-col">
            <label className="mb-1">From</label>
            <input
              type="date"
              value={fromDate}
              min={minDate}
              max={maxDate}
              onChange={(e) => {
                const newFrom = e.target.value;
                if (newFrom > toDate) {
                  setToDate(newFrom);
                }
                setFromDate(newFrom);
              }}
              className="appearance-none rounded-md bg-white dark:bg-[var(--navyblue)] border-[var(--background)] hover:text-[var(--deepteal)] dark:hover:text-white p-1 cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">To</label>
            <input
              type="date"
              value={toDate}
              min={fromDate}
              max={maxDate}
              onChange={(e) => setToDate(e.target.value)}
              className="appearance-none rounded-md bg-white dark:bg-[var(--navyblue)] border-[var(--background)] hover:text-[var(--deepteal)] dark:hover:text-white p-1 cursor-pointer"
            />
          </div>
          <button
            onClick={handleApply}
            disabled={!fromDate || !toDate}
            className={`transition px-3 py-1.5 rounded-md text-white ${
              fromDate && toDate
                ? "bg-[var(--deepteal)] hover:bg-[var(--brightaqua)] dark:bg-[var(--brimagenta)] dark:hover:bg-[var(--elecpurple)]"
                : "bg-[var(--periwinkle)] cursor-not-allowed"
            }`}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
