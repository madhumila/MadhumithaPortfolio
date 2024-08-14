import React from "react";
import Particle from "./Particles";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className='sm:h-[100vh]  bg-[url("/images/banner.jpg")] bg-cover bg-center mt-[10vh]'>
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] gradient-text font-bold">
            HI, I&apos;M <span className="">Madhumitha K P</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[16px] text-[#ffffff92]">
            Hey there! 👋 I&apos;m Madhumitha K P, a Full Stack Developer on a mission
            to elevate digital experiences to new heights. With expertise in
            ReactJS and NodeJS, I thrive on translating imaginative
            concepts into tangible, user-centric solutions.
          </p>
          <div className="mt-[2rem]  flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 ">
            <a href="Resume-Madhumitha K P.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-[2rem] bg-white hover:bg-[rgb(192,132,252)] hover:text-white transition-all duration-200 py-[1rem] text-[18px]  font-bold text-[#141c27] flex items-center space-x-2 rounded-full">
                <p>Download CV</p>
                <ArrowDownTrayIcon className=" w-[1.6rem] h-[1.7rem] " />
              </button>
            </a>
            {/* <button className="flex items-center space-x-2 bg-[rgb(192,132,252)] text-white  rounded-full px-2 hover:bg-white hover:text-[#141c27]  py-[0.5rem]">
              <PlayCircleIcon className="w-[2.5rem] h-[2.5rem] transition-all duration-200" />
              <p className="text-[18px] font-semibold">Watch The Video</p>
            </button> */}
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#141c27]  realtive lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/imagesport/madhu.png"
            alt="user"
            width={500}
            height={500}
            className="object-cover rounded-full"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
