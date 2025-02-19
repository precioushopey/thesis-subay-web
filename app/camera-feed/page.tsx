import React from "react";

const CameraFeedPage = () => {
  return (
    <div className="w-full h-full p-4 -mt-4 font-[family-name:var(--font-prompt)]">
      <div className="h-full flex flex-col bg-[#0B1739] border border-[#AEB9E1] rounded-md p-4">
        <h1 className="font-semibold text-base pb-2">Camera Feed</h1>
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-tl-md">
            01
          </div>
          <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-tr-md">
            02
          </div>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-bl-md">
            03
          </div>
          <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-br-md">
            04
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraFeedPage;
