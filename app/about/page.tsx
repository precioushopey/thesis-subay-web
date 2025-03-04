import React from "react";
import Image from "next/image";
import { MdEmail, MdFacebook, MdFileOpen } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[#7F25FB] selection:text-white">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 h-auto flex flex-col gap-4">
        {/* ABOUT US */}
        <div className=" sm:h-2/3 h-auto w-full flex flex-col bg-[#0B1739] rounded-md p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
          <h1 className="font-semibold text-base pb-2">The Team</h1>
          <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
            <Image
              src={"/group.jpg"}
              alt={"Group Picture"}
              width={520}
              height={520}
              objectFit="cover"
              className="w-full h-auto relative z-0 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
        {/* SUBAY */}
        <div className="sm:h-1/3 h-auto w-full flex flex-col bg-[#0B1739] rounded-md p-4 hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
          <h1 className="font-semibold text-base pb-2">Abstract</h1>
          <p className="text-xs text-[#AEB9E1] text-wrap">
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
      <div className="w-full lg:w-1/2 h-auto flex flex-col gap-4">
        {/* THE TEAM */}
        <div className="w-full h-auto sm:h-2/3 flex flex-col gap-4">
          {/* Xyrus and Precious */}
          <div className="w-full h-auto sm:h-1/2 flex flex-col sm:flex-row gap-4 overflow-hidden">
            {/* Xyrus */}
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-between bg-[#0B1739] rounded-md overflow-hidden hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
              <a
                href="#"
                target="_blank"
                className="absolute top-2 right-2 sm:left-2 hover:text-[#7F25FB]"
              >
                <MdFileOpen />
              </a>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-right font-semibold mt-2">
                  Xyrus Vincent Dominguez
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB]">
                  <Image
                    src={"/xyrus.png"}
                    alt={"Xyrus Vincent L. Dominguez"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col place-content-between w-full sm:w-1/2 text-[#AEB9E1] p-2">
                <h1 className="text-white text-[10px] text-center sm:text-left font-normal sm:border-l-2 sm:border-[#7F25FB] sm:pl-2">
                  Lead Researcher • Machine Learning Researcher
                </h1>
                <h1 className="text-[#AEB9E1] text-[10px] text-center font-normal italic">
                  Designs and develops the algorithm and model from the data for
                  machine learning.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:justify-start gap-x-4 sm:gap-0 text-[10px] font-light text-white">
                  <li className="flex flex-row items-center gap-1">
                    <MdEmail className="text-[#7F25FB] text-xs" />
                    <a
                      href="mailto:dominguez.xyrusvincent1@gmail.com"
                      target="_blank"
                      className="hover:text-[#7F25FB] flex flex-col"
                    >
                      <p>xyrus@gmail.com</p>
                    </a>
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
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col-reverse sm:flex-row sm:justify-between bg-[#0B1739] rounded-md hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Ht0vyHKKtTYDkNvNKNMpTn9Ppy886jza/view?usp=sharing"
                target="_blank"
                className="absolute top-2 right-2 hover:text-[#CB3CFF]"
              >
                <MdFileOpen />
              </a>
              <div className="w-full sm:w-1/2 flex flex-col place-content-between text-[#AEB9E1] text-right p-2">
                <h1 className="text-white text-[10px] text-center sm:text-right font-normal sm:border-r-2 sm:border-[#CB3CFF] sm:pr-2">
                  Co-Researcher • Front-end Web Developer
                </h1>
                <h1 className="text-[#AEB9E1] text-[10px] text-center font-normal italic">
                  Develops the web-based user-interface to display the camera
                  feed and analytics.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:items-end gap-x-4 sm:gap-0 text-[10px] font-light text-white">
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="mailto:jumuad.precious@gmail.com"
                      target="_blank"
                      className="hover:text-[#CB3CFF] flex flex-col"
                    >
                      <p>precious@gmail.com</p>
                    </a>
                    <MdEmail className="text-[#CB3CFF] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="https://www.facebook.com/precioushope.jumuad"
                      target="_blank"
                      className="hover:text-[#CB3CFF]"
                    >
                      Precious Jumuad
                    </a>
                    <MdFacebook className="text-[#CB3CFF] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
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
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-left font-semibold mt-2">
                  Precious Hope Jumuad
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-bl from-[#7F25FB] to-[#CB3CFF]">
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
          <div className="w-full h-auto sm:h-1/2 flex flex-col sm:flex-row gap-4 overflow-hidden">
            {/* Rezzelle */}
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-between bg-[#0B1739] rounded-md overflow-hidden hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
              <a
                href="#"
                target="_blank"
                className="absolute top-2 right-2 sm:left-2 hover:text-[#CB3CFF]"
              >
                <MdFileOpen />
              </a>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-right font-semibold mt-2">
                  Rezzelle Tinoy Onahon
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-br from-[#7F25FB] to-[#CB3CFF]">
                  <Image
                    src={"/rezzelle.png"}
                    alt={"Rezzelle T. Onahon"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col place-content-between w-full sm:w-1/2 text-[#AEB9E1] p-2">
                <span className="text-white text-[10px] text-center sm:text-left font-normal sm:border-l-2 sm:border-[#CB3CFF] sm:pl-2">
                  <h1>Co-Researcher • Web Application UI/UX Designer</h1>
                </span>
                <h1 className="text-[#AEB9E1] text-[10px] text-center font-normal italic">
                  Responsible for creating user-centered design for the
                  web-based user interface.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:justify-start gap-x-4 sm:gap-0 text-[10px] font-light text-white">
                  <li className="flex flex-row items-center gap-1">
                    <MdEmail className="text-[#CB3CFF] text-xs" />
                    <a
                      href="mailto:rezzelleonahon@gmail.com"
                      target="_blank"
                      className="hover:text-[#CB3CFF] flex flex-col"
                    >
                      <p>rezzelle@gmail.com</p>
                    </a>
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
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col-reverse sm:flex-row sm:justify-between bg-[#0B1739] rounded-md hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
              <a
                href="#"
                target="_blank"
                className="absolute top-2 right-2 hover:text-[#7F25FB]"
              >
                <MdFileOpen />
              </a>
              <div className="w-full sm:w-1/2 flex flex-col place-content-between text-[#AEB9E1] text-right p-2">
                <h1 className="text-white text-[10px] text-center sm:text-right font-normal sm:border-r-2 sm:border-[#7F25FB] sm:pr-2">
                  Co-Researcher • Back-end Web Developer
                </h1>
                <h1 className="text-[#AEB9E1] text-[10px] text-center font-normal italic">
                  Builds and maintains the database for storing the camera feed
                  and analytics.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:items-end gap-x-4 sm:gap-0 text-[10px] font-light text-white">
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="mailto:vjnolasco0510@gmail.com"
                      target="_blank"
                      className="hover:text-[#7F25FB] flex flex-col"
                    >
                      <p>venz@gmail.com</p>
                    </a>
                    <MdEmail className="text-[#7F25FB] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="https://www.facebook.com/vnzjshnlsc"
                      target="_blank"
                      className="hover:text-[#7F25FB]"
                    >
                      Venz Nolasco
                    </a>
                    <MdFacebook className="text-[#7F25FB] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
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
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-left font-semibold mt-2">
                  Venz Joshua Nolasco
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-bl from-[#CB3CFF] to-[#7F25FB]">
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
        {/* Files */}
        <div className="sm:h-1/3 h-auto w-full flex flex-col bg-[#0B1739] rounded-md text-[#AEB9E1] p-4 overflow-x-auto hover:rounded-md hover:border hover:border-[#AEB9E1] cursor-pointer">
          <h1 className="font-semibold text-white text-base pb-2">Files</h1>
          <div className="w-full h-full flex flex-row gap-4">
            <a
              href="https://drive.google.com/drive/folders/1dSFnD-DRdjoNeFbYrpj4HcLho6SwTprl?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center -mt-2 cursor-pointer transform transition duration-500 hover:scale-110 hover:text-white"
            >
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={100}
                height={100}
              />
              <h1 className="-mt-2 text-xs">Subay.pdf</h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1dSFnD-DRdjoNeFbYrpj4HcLho6SwTprl?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center -mt-2 cursor-pointer transform transition duration-500 hover:scale-110 hover:text-white"
            >
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={100}
                height={100}
              />
              <h1 className="-mt-2 text-xs">Feed.mp4</h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1dSFnD-DRdjoNeFbYrpj4HcLho6SwTprl?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center -mt-2 cursor-pointer transform transition duration-500 hover:scale-110 hover:text-white"
            >
              {" "}
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={100}
                height={100}
              />
              <h1 className="-mt-2 text-xs">Report.xlsx</h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1dSFnD-DRdjoNeFbYrpj4HcLho6SwTprl?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center -mt-2 cursor-pointer transform transition duration-500 hover:scale-110 hover:text-white"
            >
              {" "}
              <Image
                src={"/folder.png"}
                alt={"PDF File"}
                width={100}
                height={100}
              />
              <h1 className="-mt-2 text-xs">Forms.docs</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
