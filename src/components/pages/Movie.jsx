import React from "react";
import { useState, useEffect } from "react";    //페이지 로딩없이 데이터만 변경해주는 리엑트에서만 쓰는 변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=a3c2b7c652a8a847c713f7040bb7cc1d&page=1&query=marvel")
          .then(response => response.json())
          .then(result => setMovies(result))
          .catch(error => console.log('error', error));
    },[]);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["movie", "reference api"]} />
                <MovieCont movies={movies}/>
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Movie;
