"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-black pt-6  md:pt-10 ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 text-left">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/Logo-web-DCT-Footer.svg"
                  alt="logo"
                  className="dark:hidden"
                  width={100}
                  height={10}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-white font-kanit dark:text-body-color-dark">
                Transform your business to maximize its potential growth through in-depth business analysis and the implementation of the latest technology
              </p>
            </div>
            <div className="flex flex-col p-4 text-center justify-between items-center">
              <button className="text-white font-kanit hover:bg-white hover:text-black md:p-9">Instagram</button>
              <button className="text-white font-kanit hover:bg-white hover:text-black md:p-9">Linkedin</button>
            </div>
            <div className="p-4 text-center ">
              <h1 className="text-9xl text-white font-kanit hover:animate-bounce animate-twice animate-ease-linear">Lets Talk</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between h-3/4 py-6">
            <h1 className="text-white font-kanit">© 2024 | Alrights reserved by <br /> Digitalcenter.id</h1>
            <div className="grid grid-cols-3 gap-4">
              <h1 className="text-white font-kanit">ABOUT US</h1>
              <h1 className="text-white font-kanit px-8" >FAQS</h1>
              <h1 className="text-white font-kanit">CONTACT US</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
