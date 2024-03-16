/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

const Quote = () => {
  return (
    <section className="bg-[#F2E9E4]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4 py-4">
          <div>
            <img src="/quote-icon.png" alt="hero-bg" className="h-100 w-max" />
          </div>
          <div>
            <h4 className="text-left text-[30px] md:text-[50px] font-medium font-kanit">
              Let’s make<br />
              someting great<br />
              together<br />
            </h4>
          </div>
          <div>
            <p className="text-left text-[20px] font-kanit">Utilizing cutting-edge design approaches and
              the latest technologies, you will be streamlined
              and efficient on a year-over-year basis.</p>
            <div className="flex">
              <Link href="/about" className="bg-primary mt-2 text-white font-bold py-2 px-4 rounded mr-auto flex items-center">
                Get a Quote
                <Image src="/arrow-right-white-icon.svg" alt="arrow-right" className="ml-2" width={12} height={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote