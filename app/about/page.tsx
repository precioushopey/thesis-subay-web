import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)]">
      {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* ABOUT US */}
        <div className="h-2/3 w-full flex flex-col bg-[#0B1739] border border-[#AEB9E1] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">The Team</h1>
          <div className="border border-[#AEB9E1] rounded-lg overflow-hidden">
            <Image
              src={"/group.jpg"}
              alt={"Group Picture"}
              width={520}
              height={520}
              objectFit="cover"
            />
          </div>
        </div>
        {/* SUBAY */}
        <div className="h-1/3 w-full flex flex-col bg-[#0B1739] border border-[#AEB9E1] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">About SUBAY</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* THE TEAM */}
        <div className="w-full h-2/3 flex flex-col gap-4">
          {/* Xyrus and Precious */}
          <div className="w-full h-1/2 flex flex-row gap-4">
            <div className="w-1/2 flex flex-col justify-end bg-[#0B1739] border border-[#AEB9E1] rounded-md pl-2">
              <Image
                src={"/xyrus.png"}
                alt={"Xyrus Dominguez"}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-end items-end bg-[#0B1739] border border-[#AEB9E1] rounded-md">
              <Image
                src={"/precious.png"}
                alt={"Xyrus Dominguez"}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
          </div>
          {/* Venz and Rezzelle */}
          <div className="w-full h-1/2 flex flex-row gap-4">
            <div className="w-1/2 flex flex-col justify-end bg-[#0B1739] border border-[#AEB9E1] rounded-md pl-2">
              <Image
                src={"/rezzelle.png"}
                alt={"Rezzelle Onahon"}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-end items-end bg-[#0B1739] border border-[#AEB9E1] rounded-md">
              <Image
                src={"/venz.png"}
                alt={"Venz Nolasco"}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex flex-col bg-[#0B1739] border border-[#AEB9E1] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">Files</h1>
          <div className="w-full h-full flex flex-row gap-4">
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-md">
              01
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-md">
              02
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-md">
              03
            </div>
            <div className="w-full h-full flex flex-row items-center justify-center bg-transparent border border-[#AEB9E1] rounded-md">
              04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
