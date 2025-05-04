"use client";
import React, { useEffect, useRef } from "react";

function LiveAnalyticsIFrame() {
  const contentRef = useRef(null);

  useEffect(() => {
    const iframe = contentRef.current as any;

    const handleLoad = () => {
      console.log("Iframe loaded");
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;
      iframeDocument.documentElement.scrollTop =
        iframeDocument.documentElement.scrollHeight;
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="h-full sm:h-[570px] w-full sm:w-[805px] flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-4 p-4">
      <h1 className="font-semibold text-base">Live Analytics</h1>
      <div className="h-full border flex items-center justify-center rounded-md">
        <iframe
          ref={contentRef}
          className="w-full object-cover h-full"
          src="http://172.20.23.253:5001/video_feed/boxes"
        ></iframe>
      </div>
    </div>
  );
}

export default LiveAnalyticsIFrame;
