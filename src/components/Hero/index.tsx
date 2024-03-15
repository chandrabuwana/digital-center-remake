"use client"
import Link from "next/link";
import Lottie from "lottie-react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[220px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="w-1/2 px-4">
              <div className="mx-auto text-left">
                <h1 className="mb-5 text-[80px] font-kanit font-bold text-left leading-tight text-black dark:text-[#FFFFFF] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Digital Center Indonesia
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-left font-kanit  sm:text-lg md:text-xl">
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
            <div className="absolute right-0 top-20 z-[-10] opacity-30 lg:opacity-100">
              <Image src="/hero-4-1.png" alt="hero-bg" width={400} height={400} />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
