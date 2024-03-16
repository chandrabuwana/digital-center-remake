'use client'

import Lottie from "lottie-react";
import Animation from '../../../public/Animation.json'
const Company = () => {
  return (
    <div className="h-screen flex justify-center md:pt-36 items-center flex-col">
      <h1 className="font-kanit font-semibold text-9xl">Under construction</h1>
      <div className="h-3/4">
        <Lottie animationData={Animation} loop={true} />

      </div>

    </div>
  )
}

export default Company;