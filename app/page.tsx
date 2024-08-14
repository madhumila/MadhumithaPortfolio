"use client";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30]">
          {/* About */}
          <About />
          <Services />
          <Skills />
          <Projects/>
          <ContactMe/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
