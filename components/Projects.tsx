import Image from "next/image";
import React from "react";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading ">
        Pro
        <span className="gradient-text">jects</span>
      </h1>
      <div className="w-[80%] pt-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
           {projectsData.map(item=>(
        <div key={item.id}>
            <a href="" target="_blank" rel="noopener noreferrer" >

            <div  className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                src={item.image}
                alt="portfolio"
                width={300}
                height={300}
                // layout="fill"
                className="object-contain"
                />
            </div>
            </a>
        </div>
           ))}
        
      </div>
    </div>
  );              

};

export default Projects;
