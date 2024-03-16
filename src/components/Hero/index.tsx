"use client"
import Link from "next/link";
import Lottie from "lottie-react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[80px] dark:bg-gray-dark  xl:pt-[110px] "
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="w-full flex justify-center items-center">
              <div className="mx-auto text-left">
                <h1 className="mb-5 text-[33px] font-kanit font-bold text-left leading-tight text-black dark:text-[#FFFFFF] sm:text-4xl sm:leading-tight md:text-[80px] md:font-semibold md:leading-tight">
                  Digital Center Indonesia
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-left font-kanit sm:text-lg md:text-1xl md:text-gray-400">
                  Improve your business by analyzing it deeply and using the latest technology to increase growth.
                </p>
                <div className="flex flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-md bg-[#735DFF] text-white px-8 py-4 text-base font-semibold duration-300 ease-in-out hover:bg-black/90 dark:bg-[#5647F6] dark:text-white dark:hover:bg-white/5"
                  >
                    Get To Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative right-0 z-[-10] lg:opacity-100">
              <Image src="/hero-4-1.png" alt="hero-bg" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
