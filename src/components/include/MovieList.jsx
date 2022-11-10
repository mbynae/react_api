import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-coverflow/effect-coverflow.scss";

// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const MoviePopular = ({ poster, title, id }) => {
    const popularMovie = document.querySelectorAll(".popular__movie");
    const popularInner = document.querySelector(".popular__inner");

    popularMovie.forEach((e, i) => {
        if (i > 19) {
            popularMovie[i].style.display = "none";
        }
    });

    popularInner.addEventListener("wheel", (e) => {
        e.preventDefault();

        if (e.deltaY > 0) {
            popularInner.scrollBy(600, 0);
        } else {
            popularInner.scrollBy(-600, 0);
        }
    });

    return (
        <li className="popular__movie">
            <a href={`https://www.themoviedb.org/collection/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} target="_blank" alt={title} />
                <span>{title}</span>
            </a>
        </li>
    );
};

// const Airbnb = ({ name, images}) => {
//     return (
//         <li>
//             <span>{name}</span>
//             <span>
//                 <img src={images[0]} alt="" />
//             </span>
//         </li>
//     );
// };

const MovieList = ({ list, airbnb }) => {
    return (
        <div className="movie__PopularBox">
            <div className="container">
                <h2>Today Most Popular Movie👍</h2>
                <div className="popular__inner">
                    <div className="popular__view">
                        {list.map((popular, index) => (
                            <MoviePopular key={index} poster={popular.poster_path} title={popular.title} id={popular.id} />
                        ))}
                        ;
                    </div>
                </div>
                 {/* <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                    }}
                    slidesPerView={2}
                    centeredSlides
                    style={{ height: "500px" }}
                >
                    <SwiperSlide>
                        {list.map((popular, index) => (
                            <MoviePopular key={index} poster={popular.poster_path} title={popular.title} id={popular.id} />
                        ))}
                        ;
                    </SwiperSlide>
                </Swiper> */}
            </div>
            {/* <div className="sample">
                <div className="container">
                    <div className="sample__cont">
                        {airbnb.map((sample, index) => (
                            <Airbnb key={index} name={sample.name} images={sample.images} />
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
};


export default MovieList;
