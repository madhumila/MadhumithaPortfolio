import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface NavProps {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          MADHUMITHA <span className="text-[rgb(192,132,252)]">K P</span>
        </h1>
        {/* <div className="nav-link">Home</div>
        <div className="nav-link">SERVICES</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PROJECT</div>
        <div className="nav-link">SKILLS</div>
        <div className="nav-link">CONTACT</div> */}
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#a855f7]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
