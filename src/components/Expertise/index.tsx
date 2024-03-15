'use client'
import Link from "next/link";
import AccordionItem from "../Common/Accordion"
import { useState } from "react";
import Image from "next/image";
const dataAccordion = [
  {
    id: 1,
    title: 'Empowering Professional Excellence through Transformative Design',
    description: <p className="font-kanit text-gray-400">stands at the intersection of innovation and professionalism, shaping the future of business operations through <span className="font-kanit text-white">transformative design.</span></p>
  },
  {
    id: 2,
    title: 'Refining Workflows with Aesthetic Functionality',
    description: <p className="font-kanit text-gray-400">with an acute understanding of professional demands, we create solutions that <span className="font-kanit text-white">operations, foster productivity, and redefine the elegance of efficiency.</span></p>
  },
  {
    id: 3,
    title: 'Architecting Digital Elegance, Advancing Professionalism',
    description: <p className="font-kanit text-gray-400">Our ethos is founded on crafting digital experiences that embody <span className="font-kanit text-white">elegance and advance professionalism.</span></p>
  },
  {
    id: 4,
    title: 'Engineering Precision, Designing Success',
    description: <p className="font-kanit text-gray-400">We believe that through expertly engineered design, we can transform everyday business tasks into seamless, successful outcomes, ensuring that professionalism is not just <span className="font-kanit text-white">maintained but enhanced.</span></p>
  },

]
const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="bg-black h-full py-16 md:py-[100px] md:h-screen md:flex md:flex-col md:items-center md:justify-center">
      <div className="container">
        <div className="flex flex-col items-start justify-center space-y-10 ">
          <p className="font-kanit rounded-xl p px-4 y-8 border border-white text-white">Expertise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/9 md:justify-between">

          <div className="md:mr-[50px]">
            <h2 className="text-[28px] pt-4 leading-normal text-white md:text-[50px] font-bold md:leading-tight">With more than 3+ years of
              experience, our team has
              become expert in digital
              Transformations.</h2>
            <p className="text-gray-400 font-kanit py-6">Grow brands through bold, strategic creative</p>
            <div className="flex gap-4 items-center">
              <Link href={'/about'} className="text-white font-kanit py-6">
                Know More
              </Link>
              <Image src="/arrow-right-white-icon.svg" alt="arrow-right" className="color-white" width={12} height={12} />
            </div>
          </div>

          <div className="md:pl-[50px] text-white flex flex-col justify-items-end space-y-10 ">
            <div className="container mx-auto ">
              <div className="accordion">
                {dataAccordion.map((item, index) => (
                  <AccordionItem
                    key={index}
                    item={item}
                    isOpen={activeIndex === index}
                    onToggle={() => handleAccordionToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div >
    </section >
  )
}

export default Expertise