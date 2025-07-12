import { CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center font-[family-name:var(--font-prompt)]">
      <div className="flex gap-4 text-[var(--bluetext)] dark:text-white text-sm">
        <CircularProgress size={24} />
        Loading...
      </div>
    </div>
  );
}

export default Loading;
