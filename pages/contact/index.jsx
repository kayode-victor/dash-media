import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
import Socialicons from "@/components/Socialicons";
const Contact = () => {
  return (
    <section className="max-container paddoing-container py-12">
      <div className="flex flex-col gap-4">
        {/*title*/}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="pb-8 text-center"
        >
          <h3 className="text-[32px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
            Contact<span className="text-secondary"> Me.</span>
            <span className="text-[45px] lg:text-[64px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              get in touch
            </span>
          </h3>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col gap-4 w-full mx-auto max-w-[32rem]"
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="regular-16 placeholder:text-white rounded-full px-4 py-1 bg-gray-600 outline-none w-1/2"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="regular-16 placeholder:text-white rounded-full px-4 py-1 bg-gray-600 outline-none w-1/2"
            />
          </div>

          <textarea
            id=""
            cols="10"
            rows="5"
            placeholder="Enter message"
            className="regular-16 placeholder:text-white rounded-xl px-4 py-1 bg-gray-600 outline-none"
          ></textarea>
          <button className="btn_dark_rounded px-4 py-2 rounded-full flexCenter gap-1 font-semibold ">
            Send Message
            <span>
              <HiArrowRight />
            </span>
          </button>
        </motion.form>
        <div className="flex items-center justify-center space-x-2">
          <hr className="border-none bg-gray-50 h-[1px] w-[40%] my-4 text-center" />
          <p className="mx-4 medium-14">or</p>
          <hr className="border-none bg-gray-50 h-[1px] w-[40%] my-4 text-center" />
        </div>
        {/*social media links*/}
        <div className="flex items-center justify-center">
          <Socialicons />
        </div>
      </div>
    </section>
  );
};

export default Contact;
