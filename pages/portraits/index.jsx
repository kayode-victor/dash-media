import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const portraits = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={300} width={300} alt="potrait" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={300} width={300} alt="potrait" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={300} width={300} alt="potrait" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={300} width={300} alt="potrait" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default portraits;
