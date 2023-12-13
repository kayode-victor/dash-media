import Socialicons from "@/components/Socialicons";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="padding-container max-container page flex flex-col gap-4 flexCenter lg:flex-row lg:gap-10 ">
      {/*left*/}
      <div className=" flex-1 flexCenter flex-col lg:items-start">
        <h2 className="h2 font-bold">
          Hi, I&apos;m
          <span className="text-secondary font-semibold">
            <Typewriter
              words={[" a Photographer.", " a Film Maker."]}
              loop={true}
              cursor
              cursorStyle={"|"}
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </h2>

        <p className="py-5 text-[20px]  font-medium text-center">
          &apos;&apos; Life is a blank canvas and I&apos;m filling it with
          creativity &apos;&apos;
        </p>
        {/*social media links*/}
        <Socialicons className="flexCenter" />
      </div>
      {/*Right*/}
      <div className="flex flex-l relative">
        <Image
          src={"/hero1.png"}
          alt="heroImg"
          width={350}
          height={350}
          className="w-[288px] h-auto lg:w-full relative"
        />
        <motion.span
          className="bg-secondary blur-lg h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] absolute top-4 right-4 rounded-br-none rounded-full -z-10 lg:top-10 lg:right-10"
          animate={{
            backgroundColor: ["#45a29e", "#66fcf1"],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        ></motion.span>
      </div>
    </section>
  );
};

export default Home;
