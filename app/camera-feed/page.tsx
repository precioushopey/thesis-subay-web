import React from "react";
import Video from "next-video";
import CameraFeed from "@/videos/camera_sample.mp4";

const CameraFeedPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-5 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      <div className="h-full w-full sm:w-4/5 flex flex-col bg-[#0B1739] rounded-md p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
        <h1 className="font-semibold text-base pb-2">Camera Feed</h1>
        <div className="border border-[#AEB9E1] rounded-md">
          <Video src={CameraFeed} />
        </div>
      </div>
      <div className="h-full w-full sm:w-1/5 flex flex-col bg-[#0B1739] rounded-md p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
        <h1 className="font-semibold text-base pb-2">Analysis</h1>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-t-md">
          01
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1]">
          02
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1]">
          03
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-b-md">
          04
        </div>
      </div>
    </div>
  );
};

export default CameraFeedPage;
