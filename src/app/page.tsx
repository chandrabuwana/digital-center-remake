import Brands from "@/components/Brands";
import Expertise from "@/components/Expertise";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import OurServices from "@/components/OurServices";
import Quote from "@/components/Quote";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWork />
      <Features />
      <Expertise />
      <Brands />
      <OurServices />
      <Quote />
    </>

  );
}
