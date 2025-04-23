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
    <div className="h-full w-full sm:w-4/5 flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
      <h1 className="font-semibold text-base pb-2">Live Analytics</h1>
      <div className="h-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
        <iframe
          ref={contentRef}
          className="w-[98%] object-cover h-[98%] overflow-hidden"
          src="http://172.20.22.239:5000/"
        ></iframe>
      </div>
    </div>
  );
}

export default LiveAnalyticsIFrame;
