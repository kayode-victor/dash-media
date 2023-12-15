import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import "./styles.css";

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
          <Image src="/potrait1.jpg" height={500} width={500} alt="portrait" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={500} width={500} alt="portrait" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={500} width={500} alt="portrait" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/potrait1.jpg" height={500} width={500} alt="portrait" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default portraits;
