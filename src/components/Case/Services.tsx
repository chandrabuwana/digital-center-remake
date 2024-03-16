const dataListServices = [

  { title: "E - commerce Development", },
  { title: "Apps And Design Development", },
  { title: "Web And Design Development", },
  { title: "Paid Advertisement", },
  { title: "Social Media Management", },
  { title: "Content Marketing Service", },
  { title: "Email Marketing Service", },
  { title: "Search Engine Optimization", },


]
const Services = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-semibold font-kanit text-2xl md:text-6xl">What we do for you brands</h1>
        <h4 className="mt-10 mb-5 font-kanit font-regular text-xl">Services</h4>
        {dataListServices.map((service) => (
          <p key={service.title} className="mb-3 font-kanit text-gray-700">+ <span>{service.title}</span></p>
        ))}
      </div>
    </section>
  )
}

export default Services;