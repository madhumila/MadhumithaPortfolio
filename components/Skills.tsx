import React from "react";
import SkillsItem from "./SkillsItem";


const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#121121]">
      <h1 className="heading">
        {" "}
        <span className="gradient-text">Technical </span>
        Skills
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] items-center justify-center">
        <SkillsItem />
      </div>
    </div>
  );
};

export default Skills;
