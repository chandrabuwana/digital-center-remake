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
    <section className="h- py-[50px] md:h-screen relative z-10 overflow-hidden bg-black">
      <div className="container">
        <div className="grid grid-cols-1 flex-wrap justify-between md:grid-cols-2">
          <div className="absolute md:relative left-100 top-20 z-[-10] opacity-30 lg:opacity-100">
            <img src="/our-services-icon.png" alt="hero-bg" className="h-screen w-max" />
          </div>
          <div className="w-screen md:w-full md:py-4">
            <div className="flex flex-col items-start justify-center space-y-10 ">
              <p className="font-kanit rounded-xl p px-4 y-8 border border-white text-white">Our Service</p>
            </div>
            <div className="mx-auto text-left">
              <h1 className="mb-5 text-[30px] text-white font-kanit font-bold text-left leading-tight dark:text-[#FFFFFF] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Build your<br />
                business<br />
                with the latest<br />
                technology<br />
              </h1>
              <div className="border border-sky-100 border-1 my-4" />
              <div className="grid grid-cols-2 w-screen md:w-full container">
                {dataServices.map((item, index) => (
                  <div key={index}>
                    <p className="text-white font-kanit">+ {item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices;