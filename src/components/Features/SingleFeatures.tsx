import Image from "next/image"

const SingleFeatures = ({ item }) => {
  const { image, title, description } = item
  return (
    <div className="w-full ">
      <Image src={image} alt="hero-bg" width={50} height={50} />
      <div className="w-2/4 py-[20px]">
        <h5 className="font-kanit text-[18px] font-medium">{title}</h5>
      </div>
      <p className=" mt:2 font-kanit text-[15px] font-light">{description}</p>
    </div>
  )
}
export default SingleFeatures