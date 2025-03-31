"use client";
import { useState, FC } from "react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const ToggleButton: FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={classNames(
        enabled ? "bg-[var(--brimagenta)]" : "bg-[var(--softcyan)]",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </button>
  );
};

export default ToggleButton;
