import Image from "next/image";

const dataBrands = [
  { image: '/bca-icon.svg', title: 'BCA', description: 'BCA' },
  { image: '/adira.svg', title: 'BCA', description: 'BCA' },
  { image: '/adobe.svg', title: 'BCA', description: 'BCA' },
  { image: '/auto200.svg', title: 'BCA', description: 'BCA' },
  { image: '/binus.svg', title: 'BCA', description: 'BCA' },
  { image: '/bukopin.svg', title: 'BCA', description: 'BCA' },
  { image: '/digital-worker.svg', title: 'BCA', description: 'BCA' },
  { image: '/git.svg', title: 'BCA', description: 'BCA' },
  { image: '/idstar.svg', title: 'BCA', description: 'BCA' },
  { image: '/ladara-icon.png', title: 'BCA', description: 'BCA' },
  { image: '/kalbe.svg', title: 'BCA', description: 'BCA' },
  { image: '/maybank.svg', title: 'BCA', description: 'BCA' },
  { image: '/quintet.svg', title: 'BCA', description: 'BCA' },
  { image: '/seva.svg', title: 'BCA', description: 'BCA' },
  { image: '/soho.svg', title: 'BCA', description: 'BCA' },
  { image: '/synnex.svg', title: 'BCA', description: 'BCA' },
  { image: '/Technologi.svg', title: 'BCA', description: 'BCA' },
  { image: '/Technologi.svg', title: 'BCA', description: 'BCA' },
]
const Brands = () => {
  return (
    <section className="h-full md:h-screen">
      <div className="container">
        <div>
          <h1 className="text-center text-lg font-regular py-10 font-kanit md:py-[100px]">WE WORKED WITH GLOBAL LARGEST BRANDS</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6">
          {dataBrands.map((item, index) => (
            <div key={index}>
              <Image src={item.image} alt="hero-bg" width={200} height={200} />
            </div>

          ))}
        </div>
      </div>
    </section>

  )
}

export default Brands;