import Image from "next/image";
import SingleFeatures from "./SingleFeatures";

const featuresData = [
  {
    id: 1,
    title: "Innovative & Up To Date",
    description: "signifies a commitment to pioneering the latest technological advancements and trends.",
    image: '/features-sub-1-icon.png'
  },
  {
    id: 2,
    title: "Seamless Experience",
    description: "This commitment is pivotal in cultivating a sense of reliability and trust with clients",
    image: '/features-sub-1-icon.png'
  },
]
const Features = () => {
  return (
    <section className="bg-[#F7F7FC] py-16">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-between lg:grid-cols-2">
          <div className="w-full mb-2">
            <div className="flex flex-col items-start justify-center space-y-10 ">
              <p className="font-kanit rounded-xl p px-4 y-8 border border-black">Features</p>
            </div>
            <div className="w-full mb:4 md:w-3/4">
              <h1 className="font-kanit leading-tight font-medium text-[30px] md:text-[44px]">We execute projects utilizing our specialized and strategic approach</h1>
            </div>
          </div>
          <div className="bg-[#1e2024] pt-[13px] md: pl-[20px] pb-10 md:pt-11">
            <div className="w-full pl-4 mt:4 md:w-3/4">
              <h2 className="text-white font-kanit relative pl-14 before:absolute before:top-[3px] before:left-0 before:w-[50px] before:h-[1px] before:bg-white">
                GIVING THE BEST
              </h2>
              <h1 className="font-kanit text-gray-400 pr-4">We are perpetually innovating for the future, meticulously crafting the ensuing generation of products, brands, and design attributes from a multifaceted and hybrid viewpoint.
                <span className="font-kanit text-white">This approach ensures that our creations are not only current but also forward-thinking.</span>
                <br />
                <br />
                <span>positioning them at the forefront of industry advancements and technological progress.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-between lg:grid-cols-2">
          <div>
            <Image src="/feature-1-icon.jpeg" alt="hero-bg" width={630} height={538} />
          </div>
          <div>
            <div className="bg-[#1e2024] flex flex-1 md:h-[100px]" />
            <div className="grid grid-cols-2 gap-4 pt-4 md:mx-[100px] md:pt-[50px]">
              {featuresData.map((item) => (
                <SingleFeatures key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;