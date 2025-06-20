import React from "react";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdFacebook, MdFileOpen, MdFolder } from "react-icons/md";

const AboutPage = () => {
  const images = ["/best_thesis.jpg", "/best_prototype.jpg"];

  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      {/* LEFT */}
      <div className="w-full h-auto flex flex-col gap-4">
        {/* ABOUT US */}
        <div className="sm:h-2/3 h-auto w-full flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4">
          <h1 className="font-semibold text-base pb-2">
            We were awarded at{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/share/p/1C7Sh36BhL/"
            >
              <u>CONVERGE 2025: CpE Research Colloquium!</u>
            </a>
          </h1>
          <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg cursor-pointer border-2 border-[var(--brightaqua)] dark:border-[var(--brimagenta)]">
            <Carousel images={images} />
          </div>
        </div>
        {/* SUBAY */}
        <div className="sm:h-1/3 h-auto w-full flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4 cursor-pointer">
          <h1 className="font-semibold text-base pb-2">Abstract</h1>
          <p className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-xs text-wrap">
            The study presents <strong>SUBAY</strong>, a multi-camera detection
            system for customer tracking in retail settings. It uses
            <strong> YOLOv10</strong> for detection,
            <strong> DeepSORT</strong> for tracking, and <strong>OSNet </strong>
            for re-identification. The system achieves
            <strong> 100% precision</strong>, <strong>90.95% recall</strong>,
            and
            <strong> 72.17% F1-score</strong>, with
            <strong> 91.9% bounding box overlap</strong>. It counts
            <strong> 259</strong> unique customers, calculates dwell time, and
            generates automated insights for store optimization. Its high user
            satisfaction score demonstrates its practical applicability.
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
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-between bg-white dark:bg-[var(--navyblue)] rounded-md overflow-hidden cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1HiVoCt4xpYreHKzKaZIDsiCNrdC3bN2K/view?usp=sharing"
                target="_blank"
                className="absolute top-2 right-2 sm:left-2 hover:text-[var(--brightaqua)] dark:hover:text-[var(--elecpurple)]"
              >
                <MdFileOpen />
              </a>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-right font-semibold mt-2">
                  Xyrus Vincent Dominguez
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-br from-[var(--softcyan)] via-[var(--brightaqua)] to-[var(--deepteal)] dark:from-[var(--brimagenta)] dark:via-[var(--purgenta)] dark:to-[var(--elecpurple)]">
                  <Image
                    src={"/xyrus.png"}
                    alt={"Xyrus Vincent L. Dominguez"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col place-content-between w-full sm:w-1/2 text-[var(--bluetext)] dark:text-[var(--periwinkle)] p-2">
                <h1 className="text-[var(--bluetext)] dark:text-white text-[10px] text-center sm:text-left sm:border-l-2 sm:border-[var(--deepteal)] sm:dark:border-[var(--elecpurple)] sm:pl-2">
                  Lead Researcher • Computer Vision Researcher
                </h1>
                <h1 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-[10px] text-center font-semibold dark:font-medium italic">
                  Leader in designing and building the algorithms and models to
                  develop SUBAY.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:justify-start gap-x-4 sm:gap-0 text-[10px] font-light text-[var(--bluetext)] dark:text-white">
                  <li className="flex flex-row items-center gap-1">
                    <MdEmail className="text-[var(--deepteal)] dark:text-[var(--elecpurple)] text-xs" />
                    <a
                      href="mailto:dominguez.xyrusvincent1@gmail.com"
                      target="_blank"
                      className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)] flex flex-col"
                    >
                      <p>xyrus@gmail.com</p>
                    </a>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <MdFacebook className="text-[var(--deepteal)] dark:text-[var(--elecpurple)] text-xs" />
                    <a
                      href="https://www.facebook.com/XVLDM"
                      target="_blank"
                      className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)]"
                    >
                      Xyrus Dominguez
                    </a>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <AiFillInstagram className="text-[var(--deepteal)] dark:text-[var(--elecpurple)] text-xs" />
                    <a
                      href="https://www.instagram.com/xyeuuuuusss/"
                      target="_blank"
                      className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)]"
                    >
                      @xyeuuuuusss
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Precious */}
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col-reverse sm:flex-row sm:justify-between bg-white dark:bg-[var(--navyblue)] rounded-md cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1a6xBQ8SLlQIqsPKs1xBa9YGMyfLzFtvu/view?usp=sharing"
                target="_blank"
                className="absolute top-2 right-2 hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
              >
                <MdFileOpen />
              </a>
              <div className="w-full sm:w-1/2 flex flex-col place-content-between text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-right p-2">
                <h1 className="text-[var(--bluetext)] dark:text-white text-[10px] text-center sm:text-right sm:border-r-2 sm:border-[var(--brightaqua)] sm:dark:border-[var(--brimagenta)] sm:pr-2">
                  Co-Researcher • Front-end Web Developer
                </h1>
                <h1 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-[10px] text-center font-semibold dark:font-medium italic">
                  Develops the web-based user-interface for data analytics and
                  wrote the thesis paper.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:items-end gap-x-4 sm:gap-0 text-[10px] font-light text-[var(--bluetext)] dark:text-white">
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="mailto:jumuad.precious@gmail.com"
                      target="_blank"
                      className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)] flex flex-col"
                    >
                      <p>hope@gmail.com</p>
                    </a>
                    <MdEmail className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="https://www.facebook.com/precioushope.jumuad"
                      target="_blank"
                      className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
                    >
                      Precious Jumuad
                    </a>
                    <MdFacebook className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="https://www.instagram.com/yourprecioushope/"
                      target="_blank"
                      className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
                    >
                      @urprecioushope
                    </a>
                    <AiFillInstagram className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] text-xs" />
                  </li>
                </ul>
              </div>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-left font-semibold mt-2">
                  Precious Hope Jumuad
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-bl from-[var(--deepteal)] via-[var(--brightaqua)] to-[var(--softcyan)] dark:from-[var(--elecpurple)] dark:via-[var(--purgenta)] dark:to-[var(--brimagenta)]">
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
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-between bg-white dark:bg-[var(--navyblue)] rounded-md overflow-hidden cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Kq2zzOl5cewyv_FyE16q_vf9rLSb80uq/view?usp=sharing"
                target="_blank"
                className="absolute top-2 right-2 sm:left-2 hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
              >
                <MdFileOpen />
              </a>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-right font-semibold mt-2">
                  Rezzelle Tinoy Onahon
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-br from-[var(--deepteal)] via-[var(--brightaqua)] to-[var(--softcyan)] dark:from-[var(--elecpurple)] dark:via-[var(--purgenta)] dark:to-[var(--brimagenta)]">
                  <Image
                    src={"/rezzelle.png"}
                    alt={"Rezzelle T. Onahon"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col place-content-between w-full sm:w-1/2 text-[var(--bluetext)] dark:text-[var(--periwinkle)] p-2">
                <span className="text-[var(--bluetext)] dark:text-white text-[10px] text-center sm:text-left sm:border-l-2 sm:border-[var(--brightaqua)] sm:dark:border-[var(--brimagenta)] sm:pl-2">
                  <h1>Co-Researcher • Web Application UI/UX Designer</h1>
                </span>
                <h1 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-[10px] text-center font-semibold dark:font-medium italic">
                  Responsible for creating user-centered design for the
                  web-based user interface.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:justify-start gap-x-4 sm:gap-0 text-[10px] font-light text-[var(--bluetext)] dark:text-white">
                  <li className="flex flex-row items-center gap-1">
                    <MdEmail className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] text-xs" />
                    <a
                      href="mailto:rezzelleonahon@gmail.com"
                      target="_blank"
                      className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)] flex flex-col"
                    >
                      <p>rezze@gmail.com</p>
                    </a>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <MdFacebook className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] text-xs" />
                    <a
                      href="https://www.facebook.com/rezzelleliesh.onahon"
                      target="_blank"
                      className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
                    >
                      Rezzelle Onahon
                    </a>
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <AiFillInstagram className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] text-xs" />
                    <a
                      href="https://www.instagram.com/_rrreezzelle/"
                      target="_blank"
                      className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
                    >
                      @_rrreezzelle
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Venz */}
            <div className="relative h-auto w-full sm:w-1/2 flex flex-col-reverse sm:flex-row sm:justify-between bg-white dark:bg-[var(--navyblue)] rounded-md cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1TIdTGCMhYX7KU6r4eYsUuPCqmyopf0TB/view?usp=sharing"
                target="_blank"
                className="absolute top-2 right-2 hover:text-[var(--brightaqua)] dark:hover:text-[var(--elecpurple)]"
              >
                <MdFileOpen />
              </a>
              <div className="w-full sm:w-1/2 flex flex-col place-content-between text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-right p-2">
                <h1 className="text-[var(--bluetext)] dark:text-white text-[10px] text-center sm:text-right sm:border-r-2 sm:border-[var(--deepteal)] dark:sm:border-[var(--elecpurple)] sm:pr-2">
                  Co-Researcher • LaTeX Typesetting Documenter
                </h1>
                <h1 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-[10px] text-center font-semibold dark:font-medium italic">
                  Formatted, structured, and ensured the consistency of the
                  manuscript with LaTeX.
                </h1>
                <ul className="flex flex-row flex-wrap sm:flex-col justify-center sm:items-end gap-x-4 sm:gap-0 text-[10px] font-light text-[var(--bluetext)] dark:text-white">
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="mailto:vjnolasco0510@gmail.com"
                      target="_blank"
                      className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)] flex flex-col"
                    >
                      <p>venz@gmail.com</p>
                    </a>
                    <MdEmail className="text-[var(--deepteal)] dark:text-[var(--elecpurple)] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="https://www.facebook.com/vnzjshnlsc"
                      target="_blank"
                      className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)]"
                    >
                      Venz Nolasco
                    </a>
                    <MdFacebook className="text-[var(--deepteal)] dark:text-[var(--elecpurple)] text-xs" />
                  </li>
                  <li className="flex flex-row-reverse sm:flex-row items-center gap-1">
                    <a
                      href="https://www.instagram.com/vnzjshnlsc/"
                      target="_blank"
                      className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)]"
                    >
                      @vnzjshnlsc
                    </a>
                    <AiFillInstagram className="text-[var(--deepteal)] dark:text-[var(--elecpurple)] text-xs" />
                  </li>
                </ul>
              </div>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <div className="h-1/4 text-sm text-left font-semibold mt-2">
                  Venz Joshua Nolasco
                </div>
                <div className="h-3/4 rounded-tr-full rounded-tl-full content-end bg-gradient-to-bl from-[var(--softcyan)] via-[var(--brightaqua)] to-[var(--deepteal)] dark:from-[var(--brimagenta)] dark:via-[var(--purgenta)] dark:to-[var(--elecpurple)]">
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
        {/* FILES */}
        <div className="sm:h-1/3 h-auto w-full flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md p-4 overflow-x-auto cursor-pointer">
          <h1 className="font-semibold text-[var(--bluetext)] dark:text-white text-base">
            Files
          </h1>
          <div className="w-full h-full flex flex-row gap-4">
            <a
              href="https://drive.google.com/drive/folders/12gn-n3UZ6hknBrWxnxQckCFVgZoOPUHD?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-110"
            >
              <MdFolder
                size={80}
                className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] hover:text-[var(--softcyan)] dark:hover:text-[var(--elecpurple)]"
              />
              <h1 className="-mt-2 text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-[var(--deepteal)] dark:hover:text-white">
                Forms
              </h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/14a525Pv3JAnF4DZfYlW6Jwkta8R8IT0X?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-110"
            >
              <MdFolder
                size={80}
                className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] hover:text-[var(--softcyan)] dark:hover:text-[var(--elecpurple)]"
              />
              <h1 className="-mt-2 text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-[var(--deepteal)] dark:hover:text-white">
                Manuscript
              </h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1uVtsx3FYA7yijR9BFoUFCDzuColrp6AO?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-110"
            >
              <MdFolder
                size={80}
                className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] hover:text-[var(--softcyan)] dark:hover:text-[var(--elecpurple)]"
              />
              <h1 className="-mt-2 text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-[var(--deepteal)] dark:hover:text-white">
                Photos
              </h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1rUXT1j-NJffT7yyJWYjSG3DQSMosU-Z2?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-110"
            >
              <MdFolder
                size={80}
                className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] hover:text-[var(--softcyan)] dark:hover:text-[var(--elecpurple)]"
              />
              <h1 className="-mt-2 text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-[var(--deepteal)] dark:hover:text-white">
                User Manual
              </h1>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1NUJSGNTBZnumRdwIPY3dWcsqb2-KhSP6?usp=sharing"
              target="_blank"
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-110"
            >
              <MdFolder
                size={80}
                className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] hover:text-[var(--softcyan)] dark:hover:text-[var(--elecpurple)]"
              />
              <h1 className="-mt-2 text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-[var(--deepteal)] dark:hover:text-white">
                Videos
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
