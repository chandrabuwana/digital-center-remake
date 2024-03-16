/* eslint-disable @next/next/no-img-element */
const dataImage = [
  [{ image: '/BCA-Realation-Officer-1024x537-1.jpeg' }, { image: '/Ladara-indonesia-1280x720-1.jpg' }, { image: '/Mayback-Finance_Top-5-Google.jpeg' },], [{ image: '/Maybank-M2U-Apps_2-1024x579-1.jpeg' }, { image: '/Synnex-Metrodata_11zon.jpg' }, { image: '/WhatsApp-Image-2024-03-05-at-17.20.43.jpeg' }]
]

const ImageSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="container">
        <table className="shadow-lg bg-white w-full">
          {dataImage.map((data, index) => (
            <tr key={index} className="border-b border-gray-200">
              {data.map((item, index) => (
                <td key={index} className="border-r border-gray-200 px-8 py-4">
                  <img src={item.image} alt="" className="w-[700px] h-[300px]" />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </section>
  )
}
export default ImageSection;