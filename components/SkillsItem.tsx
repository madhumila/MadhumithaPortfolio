import Image from "next/image";
import React from "react";
import { icons } from "./icons";

const SkillsItem = () => {
  return (
    <>
      {icons.map((item) => (
        <button
          key={item.id}
          className="px-[2.5rem] py-[0.35rem]  border hover:bg-[rgb(192,132,252)] bg-slate-100  hover:scale-105 hover:text-white transition-all duration-200  text-[16px]  font-bold flex items-center space-x-4 rounded-full text-[#141c27] "
        >
          <Image src={item.icon} alt={item.name} width={40} height={40} />
          <p>{item.name}</p>
        </button>
      ))}
    </>
  );
};

export default SkillsItem;
