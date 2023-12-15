import { aboutData } from "@/app/constant/data";
import { useState } from "react";
import CountUp from "react-countup";

import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="padding-container max-container flex flex-col gap-8 py-4 lg:flex-row lg:py-20 xl:gap-32">
      {/*left*/}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-1 flex-col flexCenter text-center lg:text-start lg:justify-start"
      >
        <h2 className="h2">
          Photographer & <span className="text-secondary">Film</span>Maker
        </h2>
        <p className="hidden sm:block text-center lg:text-start">
          Hi, I am Faisal Gidado, the creative force behind Dash Media in Lagos.
          With a degree in Screen Production, I use photography to capture
          moments uniquely. Since 2017, Dash Media has been delivering premium
          Photography, Cinematography, and Editing services, both
          locally and globally.
        </p>
        <div>
          <div className="hidden lg:flex flex-1 gap-2">
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={900} end={1000} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                Happy clients
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={50} end={80} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                project completed
              </p>
            </div>

            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={50} end={150} duration={5} delay={1} />
                K+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                Social-Media following
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={1} end={5} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                year experience
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/*right*/}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col  w-full xl:max-w-[47%] h-[488px]"
      >
        {/*Expertise*/}
        <div className="mb-2 lg:mb-10 flex flex-col gap-2 mx-auto min-w-[90%] xl:ml-0">
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Camera Operation</span>
              <span>100%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[100%] bg-[#66fcf1] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Exposure and Lighting Control </span>
              <span>100%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[100%] bg-[#64ebe4] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Focusing </span>
              <span>100%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[100%] bg-[#52c2bc] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Digital Imaging </span>
              <span>95%</span>
            </div>
            <div className="relative bg-gray-700 h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[95%] bg-[#45a29e] rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
        {/*tabs */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 sm:mt-0 mt-8">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "after:w-[100%] after:!bg-secondary after:transition-all after:duration-500"
              } capitalize medium-16 relative after:absolute after:h-[2px] after:w-9 after:bg-white after:left-0 after:-bottom-1 cursor-pointer`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {/*tab data*/}
        <div className="py-2 xl:py-4 flex flex-row gap-1 items-center xl:items-start"></div>
        {aboutData[index].info.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="flex flex-1 flex-col md:flex-row gap-x-3 items-center text-white/50"
          >
            <div>{item.title}</div>
            <div className="hidden lg:flex"></div>
            <div>{item.year}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
