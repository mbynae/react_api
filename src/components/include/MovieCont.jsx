import React from "react";

// const MovieBox = (adult) => {
//     return (
//         <div>{adult}</div>
//     );
// };

function MovieItem(props) {
    return (
        <li>
            <a href={`https://www.themoviedb.org/collection/${props.movie.id}`} target="_blank" rel="noreferrer">
                <img src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt={props.movie.name} />
                <em>
                    <span className="title">{props.movie.name}</span>
                    <span className="star">{props.movie.vote_average}</span>
                </em>
            </a>
        </li>
    );
}

const MovieCont = (props) => {
    return (
        <section className="cont__movie">
            <div className="container">
                <div className="movie__inner">
                    <h2>Marvel's Movie List</h2>
                    <ul>
                        {props.movies.map((movies, index) => (
                            <MovieItem key={index} movie={movies} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieCont;
