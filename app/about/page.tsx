import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

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
          <h1 className="font-semibold text-base pb-2">Abstract</h1>
          <p className="text-xs text-[#AEB9E1]">
            Retail environments benefit greatly from advanced customer
            analytics, yet traditional single-camera tracking systems often fail
            to provide comprehensive insights due to occlusions and limited
            perspectives. This study aims to develop a multi-camera object
            detection system that utilizes machine learning models, such as YOLO
            and DeepSort, to track and analyze customer movements in retail
            stores. The study evaluates the system's performance and usability,
            contributing to intelligent retail analytics.
          </p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* THE TEAM */}
        <div className="w-full h-2/3 flex flex-col gap-4">
          {/* Xyrus and Precious */}
          <div className="w-full h-1/2 flex flex-row gap-4">
            {/* Xyrus */}
            <div className="w-1/2 flex flex-row justify-between bg-[#0B1739] border border-[#AEB9E1] rounded-md">
              <div className="w-1/2 flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-right font-semibold mt-2">
                  Xyrus Vincent L. Dominguez
                </div>
                <div className="h-3/4 rounded-tr-full content-end bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB]">
                  <Image
                    src={"/xyrus.png"}
                    alt={"Xyrus Vincent L. Dominguez"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-1/2 text-[#AEB9E1] p-2">
                <h1 className="text-white text-[10px] font-normal border-l-2 border-[#7F25FB] pl-2">
                  Lead Researcher • Machine Learning Researcher
                </h1>
                <h1 className="text-[#AEB9E1] text-[10px] font-normal italic">
                  Designs and develops the algorithm and model from the data for
                  machine learning.
                </h1>
                <ul className="text-[10px] font-light text-white">
                  <li className="flex flex-row items-center gap-1">
                    <MdEmail className="text-[#7F25FB] text-xs" />
                    <span className="hover:text-[#7F25FB] flex flex-col">
                      <p>dominguez.xyrus</p>
                      <p>vincent1@gmail.com</p>
                    </span>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <MdFacebook className="text-[#7F25FB] text-xs" />
                    <a
                      href="https://www.facebook.com/XVLDM"
                      target="_blank"
                      className="hover:text-[#7F25FB]"
                    >
                      Xyrus Dominguez
                    </a>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <AiFillInstagram className="text-[#7F25FB] text-xs" />
                    <a
                      href="https://www.instagram.com/xyeuuuuusss/"
                      target="_blank"
                      className="hover:text-[#7F25FB]"
                    >
                      @xyeuuuuusss
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Precious */}
            <div className="w-1/2 flex flex-row justify-between bg-[#0B1739] border border-[#AEB9E1] rounded-md">
              <div className="w-1/2 text-[#AEB9E1] text-right p-2">
                <h1 className="text-white text-[10px] font-normal border-r-2 border-[#CB3CFF] pr-2">
                  Co-Researcher • Front-end Web Developer
                </h1>
                <h1 className="text-[#AEB9E1] text-[10px] font-normal italic">
                  Develops the web-based user-interface to display the camera
                  feed and analytics.
                </h1>
                <ul className="text-[10px] justify-items-end font-light text-white">
                  <li className="flex flex-row items-center gap-1">
                    <span className="hover:text-[#CB3CFF] flex flex-col">
                      <p>jumuad.precious</p>
                      <p>@gmail.com</p>
                    </span>
                    <MdEmail className="text-[#CB3CFF] text-xs" />
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <a
                      href="https://www.facebook.com/precioushope.jumuad"
                      target="_blank"
                      className="hover:text-[#CB3CFF]"
                    >
                      Precious Jumuad
                    </a>
                    <MdFacebook className="text-[#CB3CFF] text-xs" />
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <a
                      href="https://www.instagram.com/yourprecioushope/"
                      target="_blank"
                      className="hover:text-[#CB3CFF]"
                    >
                      @yourprecioushope
                    </a>
                    <AiFillInstagram className="text-[#CB3CFF] text-xs" />
                  </li>
                </ul>
              </div>
              <div className="w-1/2 flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-left font-semibold mt-2">
                  Precious Hope T. Jumuad
                </div>
                <div className="h-3/4 rounded-tl-full justify-end content-end bg-gradient-to-bl from-[#7F25FB] to-[#CB3CFF]">
                  <Image
                    src={"/precious.png"}
                    alt={"Precious Hope T. Jumuad"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Venz and Rezzelle */}
          <div className="w-full h-1/2 flex flex-row gap-4">
            {/* Rezzelle */}
            <div className="w-1/2 flex flex-row justify-between bg-[#0B1739] border border-[#AEB9E1] rounded-md">
              <div className="w-1/2 flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-right font-semibold mt-2">
                  <p>Rezzelle T.</p>
                  <p>Onahon</p>
                </div>
                <div className="h-3/4 rounded-tr-full content-end bg-gradient-to-br from-[#7F25FB] to-[#CB3CFF]">
                  <Image
                    src={"/rezzelle.png"}
                    alt={"Rezzelle T. Onahon"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-1/2 text-[#AEB9E1] p-2">
                <span className="flex flex-col text-white text-[10px] font-normal border-l-2 border-[#CB3CFF] pl-2">
                  <h1>Co-Researcher •</h1>
                  <h1>Web Application UI/UX Designer</h1>
                </span>
                <h1 className="text-[#AEB9E1] text-[10px] font-normal italic">
                  Responsible for creating user-centered design for the
                  web-based user interface.
                </h1>
                <ul className="text-[10px] font-light text-white">
                  <li className="flex flex-row items-center gap-1">
                    <MdEmail className="text-[#CB3CFF] text-xs" />
                    <span className="hover:text-[#CB3CFF] flex flex-col">
                      <p>rezzelleonahon</p>
                      <p>@gmail.com</p>
                    </span>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <MdFacebook className="text-[#CB3CFF] text-xs" />
                    <a
                      href="https://www.facebook.com/rezzelleliesh.onahon"
                      target="_blank"
                      className="hover:text-[#CB3CFF]"
                    >
                      Rezzelle Onahon
                    </a>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <AiFillInstagram className="text-[#CB3CFF] text-xs" />
                    <a
                      href="https://www.instagram.com/_rrreezzelle/"
                      target="_blank"
                      className="hover:text-[#CB3CFF]"
                    >
                      @_rrreezzelle
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Venz */}
            <div className="w-1/2 flex flex-row justify-between bg-[#0B1739] border border-[#AEB9E1] rounded-md">
              <div className="w-1/2 text-[#AEB9E1] text-right p-2">
                <h1 className="text-white text-[10px] font-normal border-r-2 border-[#7F25FB] pr-2">
                  Co-Researcher • Back-end Web Developer
                </h1>
                <h1 className="text-[#AEB9E1] text-[10px] font-normal italic">
                  Builds and maintains the database for storing the camera feed
                  and analytics.
                </h1>
                <ul className="text-[10px] justify-items-end font-light text-white">
                  <li className="flex flex-row items-center gap-1">
                    <span className="hover:text-[#7F25FB] flex flex-col">
                      <p>vjnolasco0510</p>
                      <p>@gmail.com</p>
                    </span>
                    <MdEmail className="text-[#7F25FB] text-xs" />
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <a
                      href="https://www.facebook.com/vnzjshnlsc"
                      target="_blank"
                      className="hover:text-[#7F25FB]"
                    >
                      Venz Nolasco
                    </a>
                    <MdFacebook className="text-[#7F25FB] text-xs" />
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <a
                      href="https://www.instagram.com/vnzjshnlsc/"
                      target="_blank"
                      className="hover:text-[#7F25FB]"
                    >
                      @vnzjshnlsc
                    </a>
                    <AiFillInstagram className="text-[#7F25FB] text-xs" />
                  </li>
                </ul>
              </div>
              <div className="w-1/2 flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-left font-semibold mt-2">
                  Venz Joshua Nolasco
                </div>
                <div className="h-3/4 rounded-tl-full content-end bg-gradient-to-bl from-[#CB3CFF] to-[#7F25FB]">
                  <Image
                    src={"/venz.png"}
                    alt={"Venz Joshua Nolasco"}
                    width={125}
                    height={125}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex flex-col bg-[#0B1739] border border-[#AEB9E1] rounded-md text-[#AEB9E1] p-4">
          <h1 className="font-semibold text-white text-base pb-2">Files</h1>
          <div className="w-full h-full flex flex-row gap-4">
            <div className="w-full h-full flex flex-col items-center justify-center -mt-2">
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={120}
                height={120}
              />
              <h1 className="-mt-2 text-xs">Subay.pdf</h1>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center -mt-2">
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={120}
                height={120}
              />
              <h1 className="-mt-2 text-xs">Camera_Feed.mp4</h1>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center -mt-2">
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={120}
                height={120}
              />
              <h1 className="-mt-2 text-xs">Report.xlsx</h1>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center -mt-2">
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={120}
                height={120}
              />
              <h1 className="-mt-2 text-xs">Forms.docs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
