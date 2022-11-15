import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function YoutubeRan({ random }) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${random.id.videoId}`}>
        <img
          src={random.snippet.thumbnails.high.url}
          alt={random.snippet.description}
        />
      </a>
    </li>
  );
}
const YoutubeSlider = ({ random }) => {
  return (
    <section className="movie__popular">
      <div className="container">
        <div className="popular__inner">
          <h2>Youtube Ranking</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 20 ? (
                <SwiperSlide key={index}>
                  <YoutubeRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};



export default YoutubeSlider