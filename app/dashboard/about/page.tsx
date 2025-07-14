import Image from "next/image";
import React, { JSX } from "react";
import Carousel from "@/app/components/Carousel";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdFacebook, MdFileOpen, MdFolder } from "react-icons/md";

const images = ["/best_thesis.jpg", "/best_prototype.jpg"];

type ContactLink = {
  icon: JSX.Element;
  href: string;
  label: string;
};

type FileItem = {
  label: string;
  url: string;
};

const allContactLinks: Record<string, ContactLink[]> = {
  xyrus: [
    {
      icon: <MdEmail className="icon-style-boy" />,
      href: "mailto:dominguez.xyrusvincent1@gmail.com",
      label: "xyrus@gmail.com",
    },
    {
      icon: <MdFacebook className="icon-style-boy" />,
      href: "https://www.facebook.com/XVLDM",
      label: "Xyrus Dominguez",
    },
    {
      icon: <AiFillInstagram className="icon-style-boy" />,
      href: "https://www.instagram.com/xyeuuuuusss/",
      label: "@xyeuuuuusss",
    },
  ],
  precious: [
    {
      icon: <MdEmail className="icon-style-girl" />,
      href: "mailto:jumuad.precious@gmail.com",
      label: "hope@gmail.com",
    },
    {
      icon: <MdFacebook className="icon-style-girl" />,
      href: "https://www.facebook.com/precioushope.jumuad",
      label: "Precious Jumuad",
    },
    {
      icon: <AiFillInstagram className="icon-style-girl" />,
      href: "https://www.instagram.com/yourprecioushope/",
      label: "@urprecioushope",
    },
  ],
  rezzelle: [
    {
      icon: <MdEmail className="icon-style-girl" />,
      href: "mailto:rezzelleonahon@gmail.com",
      label: "rezze@gmail.com",
    },
    {
      icon: <MdFacebook className="icon-style-girl" />,
      href: "https://www.facebook.com/rezzelleliesh.onahon",
      label: "Rezzelle Onahon",
    },
    {
      icon: <AiFillInstagram className="icon-style-girl" />,
      href: "https://www.instagram.com/_rrreezzelle/",
      label: "@_rrreezzelle",
    },
  ],
  venz: [
    {
      icon: <MdEmail className="icon-style-boy" />,
      href: "mailto:vjnolasco0510@gmail.com",
      label: "venz@gmail.com",
    },
    {
      icon: <MdFacebook className="icon-style-boy" />,
      href: "https://www.facebook.com/vnzjshnlsc",
      label: "Venz Nolasco",
    },
    {
      icon: <AiFillInstagram className="icon-style-boy" />,
      href: "https://www.instagram.com/vnzjshnlsc/",
      label: "@vnzjshnlsc",
    },
  ],
};

const fileLinks: FileItem[] = [
  {
    label: "Forms",
    url: "https://drive.google.com/drive/folders/12gn-n3UZ6hknBrWxnxQckCFVgZoOPUHD?usp=sharing",
  },
  {
    label: "Manuscript",
    url: "https://drive.google.com/drive/folders/14a525Pv3JAnF4DZfYlW6Jwkta8R8IT0X?usp=sharing",
  },
  {
    label: "Photos",
    url: "https://drive.google.com/drive/folders/1uVtsx3FYA7yijR9BFoUFCDzuColrp6AO?usp=sharing",
  },
  {
    label: "User Manual",
    url: "https://drive.google.com/drive/folders/1rUXT1j-NJffT7yyJWYjSG3DQSMosU-Z2?usp=sharing",
  },
  {
    label: "Videos",
    url: "https://drive.google.com/drive/folders/1NUJSGNTBZnumRdwIPY3dWcsqb2-KhSP6?usp=sharing",
  },
];

const AboutPage = () => {
  return (
    <section className="container lg:flex-row">
      <div className="card lg:w-1/2 h-fit gap-2">
        <h2 className="font-semibold">
          We were awarded at{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/share/p/1C7Sh36BhL/"
          >
            <u>CONVERGE 2025: CpE Research Colloquium!</u>
          </a>
        </h2>
        <Carousel images={images} />
      </div>

      <div className="w-full lg:w-1/2 h-fit flex flex-col gap-4">
        {/* THE TEAM */}
        <div className="h-fit w-full flex flex-col gap-4">
          {/* Xyrus and Precious */}
          <div className="w-full flex flex-col sm:flex-row gap-4 overflow-hidden">
            {/* Xyrus */}
            <div className="contributor">
              <a
                href="https://drive.google.com/file/d/1HiVoCt4xpYreHKzKaZIDsiCNrdC3bN2K/view?usp=sharing"
                target="_blank"
                className="cv-boy sm:left-2"
              >
                <MdFileOpen />
              </a>
              <div className="w-auto sm:w-1/2 flex flex-col items-center justify-center overflow-hidden">
                <h3 className="h-1/4 text-sm text-right font-semibold mt-2">
                  Xyrus Vincent Dominguez
                </h3>
                <div className="background-boy bg-gradient-to-br">
                  <Image
                    src={"/xyrus.png"}
                    alt={"Xyrus Vincent L. Dominguez"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="profile-info">
                <h5 className="profile-header-boy sm:text-left sm:border-l-2 sm:pl-2">
                  Lead Researcher • Computer Vision Researcher
                </h5>
                <h4 className="profile-description">
                  Leader in designing and building the algorithms and models to
                  develop SUBAY.
                </h4>
                <ul className="contact-list sm:justify-start">
                  {allContactLinks.xyrus.map(({ icon, href, label }, i) => (
                    <li key={i} className="flex items-center gap-1">
                      {icon}
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)]"
                      >
                        <p>{label}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Precious */}
            <div className="contributor flex-col-reverse">
              <a
                href="https://drive.google.com/file/d/1a6xBQ8SLlQIqsPKs1xBa9YGMyfLzFtvu/view?usp=sharing"
                target="_blank"
                className="cv-girl"
              >
                <MdFileOpen />
              </a>
              <div className="profile-info text-right">
                <h5 className="profile-header-girl sm:text-right sm:border-r-2 sm:pr-2">
                  Co-Researcher • Front-end Web Developer
                </h5>
                <h4 className="profile-description">
                  Develops the web-based user-interface for data analytics and
                  wrote the thesis paper.
                </h4>
                <ul className="contact-list sm:items-end">
                  {allContactLinks.precious.map(({ icon, href, label }, i) => (
                    <li
                      key={i}
                      className="flex flex-row-reverse sm:flex-row items-center gap-1"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
                      >
                        <p>{label}</p>
                      </a>
                      {icon}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-auto sm:w-1/2 flex flex-col items-center justify-center overflow-hidden">
                <h3 className="h-1/4 text-sm text-left font-semibold mt-2">
                  Precious Hope Jumuad
                </h3>
                <div className="background-girl bg-gradient-to-bl">
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
          <div className="w-full flex flex-col sm:flex-row gap-4 overflow-hidden">
            {/* Rezzelle */}
            <div className="contributor">
              <a
                href="https://drive.google.com/file/d/1Kq2zzOl5cewyv_FyE16q_vf9rLSb80uq/view?usp=sharing"
                target="_blank"
                className="cv-girl sm:left-2"
              >
                <MdFileOpen />
              </a>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <h3 className="h-1/4 text-sm text-right font-semibold mt-2">
                  Rezzelle Tinoy Onahon
                </h3>
                <div className="background-girl bg-gradient-to-br">
                  <Image
                    src={"/rezzelle.png"}
                    alt={"Rezzelle T. Onahon"}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="profile-info">
                <span className="profile-header-girl sm:text-left sm:border-l-2 sm:pl-2">
                  <h5>Co-Researcher • Web Application UI/UX Designer</h5>
                </span>
                <h4 className="profile-description">
                  Responsible for creating user-centered design for the
                  web-based user interface.
                </h4>
                <ul className="contact-list sm:justify-start">
                  {allContactLinks.rezzelle.map(({ icon, href, label }, i) => (
                    <li key={i} className="flex items-center gap-1">
                      {icon}
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--brightaqua)] dark:hover:text-[var(--brimagenta)]"
                      >
                        <p>{label}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Venz */}
            <div className="contributor flex-col-reverse">
              <a
                href="https://drive.google.com/file/d/1TIdTGCMhYX7KU6r4eYsUuPCqmyopf0TB/view?usp=sharing"
                target="_blank"
                className="cv-boy"
              >
                <MdFileOpen />
              </a>
              <div className="profile-info text-right">
                <h5 className="profile-header-boy sm:text-right sm:border-r-2 sm:pr-2">
                  Co-Researcher • LaTeX Typesetting Documenter
                </h5>
                <h4 className="profile-description">
                  Formatted, structured, and ensured the consistency of the
                  manuscript with LaTeX.
                </h4>
                <ul className="contact-list sm:items-end">
                  {allContactLinks.venz.map(({ icon, href, label }, i) => (
                    <li
                      key={i}
                      className="flex flex-row-reverse sm:flex-row items-center gap-1"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--deepteal)] dark:hover:text-[var(--elecpurple)]"
                      >
                        <p>{label}</p>
                      </a>
                      {icon}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-auto sm:w-1/2 items-center justify-center flex flex-col overflow-hidden">
                <h3 className="h-1/4 text-sm text-left font-semibold mt-2">
                  Venz Joshua Nolasco
                </h3>
                <div className="background-boy bg-gradient-to-bl">
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
        <div className="card h-fit overflow-x-auto cursor-pointer">
          <h2 className="font-semibold text-[var(--bluetext)] dark:text-white">
            Files
          </h2>
          <div className="w-full flex gap-4">
            {fileLinks.map(({ label, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-110"
              >
                <MdFolder
                  size={80}
                  className="text-[var(--brightaqua)] dark:text-[var(--brimagenta)] hover:text-[var(--softcyan)] dark:hover:text-[var(--elecpurple)]"
                />
                <p className="-mt-2 text-xs text-[var(--bluetext)] dark:text-[var(--periwinkle)] hover:text-[var(--deepteal)] dark:hover:text-white">
                  {label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
