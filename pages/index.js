import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <>
    {/* <Testimonial/> */}
    <div 
        style={{ backgroundImage: "url('/IMG_6453.JPG')" }} className="bg-cover bg-center">
      <Hero/>
      <Services/>
    </div>
    <Brands/>
    <Project/>
    {/* <HowWorks/> */}
    {/* <Stats/> */}
    {/* <FeaturedProject/> */}
    {/* <Contacts/> */}
    

</>
  
  )
}
