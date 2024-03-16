/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 md:w-full mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 md:justify-around">
                <h1 className="font-kanit text-4xl font-semibold md:text-9xl md:font-medium md:mb-20">Let's get in touch</h1>
                <div className=" flex justify-end">
                  <div className="flex items-center w-1/2">
                    <h1 className="font-kanit text-right">Great! We're excited to hear from you and let's start something special togerter. call us for any inquery.</h1>
                  </div>
                </div>
              </div>
              <h1 className="font-kanit text-2xl md:text-2xl md:font-medium md:mb-10">Don't­ be­ afraid­ man­ !<br /> say hello</h1>
              <Link className="font-kanit md:text-md md:font-light md:mb-1" href={'mailto:cs@digitalcenter.id'}>cs@digitalcenter.id</Link>
              <p className="font-kanit py-10 md:text-md md:font-light md:mb-10">Wisma Staco 7th Floor Jl Casablanca Raya Kav. 18 Menteng Dalam, Tebet, South Jakarta, Indonesia – 12870</p>

            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[300px] lg:mr-0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
