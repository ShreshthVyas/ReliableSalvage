import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Salvage",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      
      
      <AboutSectionOne />
      <AboutSectionTwo />
      
      <Contact />
    </>
  );
}
