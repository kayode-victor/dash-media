import { worksData } from "@/app/constant/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
//swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Work = () => {
  return (
    <section className="padding-container max-container py-10 xl:py-20">
      {/*title*/}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pb-8 text-center"
      >
        <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
          port<span className="text-secondary">folio</span>
          <span className="text-[45px] lg:text-[64px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
            My Albums
          </span>
        </h3>
        <p className=" py-5 text-center max-w-md mx-auto text-gray-10 text-[18px] lg:text-[23px] mt-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          tenetur!
        </p>
      </motion.div>
      {/* swiper*/}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full sm:max-w-[95%]"
      >
        {
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              880: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="h-[288px]"
          >
            {worksData.map((work, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-800 px-8 py-12 rounded-lg h-max flex flex-col gap-4 relative hover:bg-secondary  w-[70%] sm:w-full mx-auto group">
                  <div className="text-secondary place-self-end text-5xl group-hover:text-gray-950">
                    {work.icon}
                  </div>
                  <h3 className="text-secondary bold-14 uppercase max-w-[2.5rem] group-hover:text-gray-950">
                    {work.title}
                  </h3>
                  {/* link*/}
                  <Link
                    href={work.link}
                    className="font-extrabold text-secondary bg-primary border-secondary border-[3px] h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-20 transition-all duration-500 -rotate-45"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </motion.div>
    </section>
  );
};

export default Work;
