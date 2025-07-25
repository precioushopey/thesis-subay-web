"use client";
import React, { useEffect, useRef } from "react";

function LiveAnalyticsIFrame() {
  const contentRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = contentRef.current;

    const handleLoad = () => {
      if (!iframe) return;

      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow?.document;

      if (iframeDocument?.documentElement) {
        iframeDocument.documentElement.scrollTop =
          iframeDocument.documentElement.scrollHeight;
      }
    };

    iframe?.addEventListener("load", handleLoad);

    return () => {
      iframe?.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="card h-full sm:h-[570px] sm:w-[805px] gap-y-4">
      <h1 className="font-semibold text-base">Live Analytics</h1>
      <div className="h-full border flex items-center justify-center rounded-md">
        <iframe
          ref={contentRef}
          className="w-full object-cover h-full"
          src="http://172.20.23.221:5001/video_feed/boxes"
        ></iframe>
      </div>
    </div>
  );
}

export default LiveAnalyticsIFrame;
