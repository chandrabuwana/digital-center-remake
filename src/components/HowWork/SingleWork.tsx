import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleWork = ({ testimonial }: { testimonial: Testimonial }) => {
  const { title, image, description, } = testimonial;

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ">
        <div className="relative text-center mx-auto h-[200px] w-full max-w-[200px] overflow-hidden rounded-full">
          <Image src={image} alt={title} width={200} height={200} />
        </div>

        <div className="flex items-center">
          <div className="w-full">
            <h3 className="mb-1 text-center font-kanit font-semibold text-dark dark:text-white lg:text-base xl:text-[24px]">
              {title}
            </h3>
          </div>
        </div>
        <p className="mb-1 text-center font-kanit  border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleWork;
