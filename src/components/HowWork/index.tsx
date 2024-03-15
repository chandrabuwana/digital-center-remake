import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleWork from "./SingleWork";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    title: "Teamwork",
    description: "Providing the best results is a lengthy process that requires cooperation",
    image: "/work-1-icon.png",
    star: 5,
  },
  {
    id: 2,
    title: "Problem Solvers",
    description: "Always giving you the newest ideas and information that fits your needs",
    image: "/work-2-icon.png",
    star: 5,
  },
  {
    id: 3,
    title: "Offer Solutions",
    description: "Ensuring that you achive the desired outcomes effectively and efficiently",
    image: "/work-3-icon.png",
    star: 5,
  },
];

const HowWork = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-12 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-10 ">
          <p className="font-kanit rounded-xl p px-4 y-8 border border-black">Processing</p>
        </div>
        <SectionTitle
          title="How we work"
          paragraph="Find out how the digital center can help you work together."
          center
        />

        <div className="grid grid-cols-1 gap-x-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleWork key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section >
  );
};

export default HowWork;
