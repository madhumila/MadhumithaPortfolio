import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="gradient-text ">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="gradient-red hover:scale-110 transform transition-all duration-300 hover:-rotate-6  font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize">
              Frontend Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              I specialize in creating visually appealing and responsive user
              interfaces using modern web technologies. I focus on delivering
              seamless user experiences. Whether it's working with HTML, CSS,
              and JavaScript or using frameworks like React, I build the front
              end of applications that engage users and bring ideas to life.
            </p>
          </div>
        </div>
        <div>
          <div className="gradient-orange hover:scale-110 transform transition-all duration-300   font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize">
              Backend Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              With a strong foundation in backend development, I design and
              implement robust server-side logic that powers web applications. I
              work with databases, APIs, and server frameworks to ensure data
              integrity, security, and optimal performance. My expertise in
              Node.js allows me to build scalable systems that handle complex
              operations behind the scenes.
            </p>
          </div>
        </div>
        <div>
          <div className="gradient-blue hover:scale-110 transform transition-all duration-300 hover:rotate-6  font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize">
              Fullstack Development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal ">
              As a fullstack developer, I seamlessly integrate
              frontend interfaces with backend functionalities, creating
              cohesive and efficient solutions. My fullstack expertise allows me
              to bridge the gap between design and development, ensuring that
              both the user experience and the underlying architecture are
              optimized for performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
