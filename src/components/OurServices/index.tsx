/* eslint-disable @next/next/no-img-element */
const dataServices = [
  { title: 'E-commerce Development' },
  { title: 'Apps Design And Development' },
  { title: 'Social Media Management' },
  { title: 'Content Marketing Service' },
  { title: 'Web And Design Development' },
  { title: 'Paid Advertisement' },
  { title: 'Email Marketing' },
  { title: 'Search Engine Optimization' },
]
const OurServices = () => {
  return (
    <section className="h-screen py-[50px] md:h-1/2 flex justify-center items-center relative z-10 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 flex-wrap justify-between md:grid-cols-2">
          <div className="absolute md:relative opacity-30 lg:opacity-100">
            <img src="/our-services-icon.png" alt="hero-bg" className="h-screen w-auto" />
          </div>
          <div className="w-screen md:w-full md:py-4 flex items-center justify-center flex-col">
            <div className="flex flex-col items-start justify-start">
              <div className="mb-4">
                <p className="font-kanit rounded-xl p px-4 y-8 border border-white text-white">Our Service</p>
              </div>
              <div className="mx-auto text-left">
                <h1 className="mb-5 text-[30px] text-white font-kanit font-bold text-left leading-tight dark:text-[#FFFFFF] md:text-5xl md:leading-tight">
                  Build your<br />
                  business<br />
                  with the latest<br />
                  technology<br />
                </h1>
                <div className="border border-sky-100 border-1 my-4" />
                <div className="grid grid-cols-2 w-screen md:w-full container">
                  {dataServices.map((item, index) => (
                    <div key={index} className="pt-4">
                      <p className="text-white font-kanit">+ {item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurServices;