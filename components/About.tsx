import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div
        className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[5rem] items-center
        "
      >
        <div className="lg:w-[400px] mx-auto md:mx-0 mt-[2rem] lg:mt:0 lg:h-[400px] w-[300px] h-[300px] relative">
          <Image
            src={"/imagesport/about-image.png"}
            alt="src"
            className="object-contain relative z-[11] w-[100%] h-[100%] "
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
          <div className="absolute w-[100%] h-[100%] z-[10] gradient-bg top-[-2rem] right-[-2rem]"></div>
        </div>
        <div>
          <h1 className="text-[20px] font-bold uppercase gradient-text mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="gradient-text">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Seasoned React Developer with 1 year of intensive experience
              tackling complex projects from day one. Skilled in HTML, CSS,
              React.js, Redux, and Material-UI, dedicated to continuously
              refining expertise in crafting dynamic and responsive user
              interfaces.
            </p>
          </div>
          <a href="Resume-Madhumitha K P.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-[2rem] bg-white hover:bg-[rgb(192,132,252)] hover:text-white transition-all duration-200 py-[1rem] text-[18px]  font-bold text-[#141c27] flex items-center space-x-2 rounded-full">
              <p>Download CV</p>
              <ArrowDownTrayIcon className=" w-[1.6rem] h-[1.7rem] " />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
