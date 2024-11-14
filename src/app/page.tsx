"use client"

import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"



export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay:100,
      mirror:true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, [])
  return (
    <main>
      <Hero />
      <About />
      <Projects /> 
      <Skills />
      <Contact />
    </main>
   
  );
}
