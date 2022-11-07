import React from "react";

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

    // popularInner.addEventListener("scroll", (e) => {
    //     popularInner.scrollLeft = popularInner.scrollTop;
    // });

    return (
        <li className="popular__movie">
            <a href={`https://www.themoviedb.org/collection/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} target="_blank" alt={title} />
                <span>{title}</span>
            </a>
        </li>
    );
};

const MovieList = ({ list }) => {
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
            </div>
        </div>
    );
};

export default MovieList;
