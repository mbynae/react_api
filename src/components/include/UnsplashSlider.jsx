import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel, Autoplay} from "swiper";

function UnsplashRandom({ random }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={random.urls.regular} alt={random.alt_description} className="youtubeSlideImg"/>
      </a>
    </li>
  );
}
const UnsplashSlider = ({ random }) => {
  return (
    <section className="unsplash__random">
      <div className="container">
        <div className="random__inner">
          <h2>Unsplash Random Image</h2>
          <Swiper
            direction={"horizontal"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            mousewheel={true}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar, Mousewheel, Autoplay]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashRandom key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider
