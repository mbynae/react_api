import React from "react";
import { useState, useEffect } from "react"; //페이지 로딩없이 데이터만 변경해주는 리엑트에서만 쓰는 변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [listmovies, setlist] = useState([]);
    // const [airbnb, setAirbnb] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a3c2b7c652a8a847c713f7040bb7cc1d&language=ko-KO&page=1&region=KR`)
            .then((response) => response.json())
            .then((result) => setlist(result.results))
            .catch((error) => console.log(error));
    }, []);

    const search = async (query) => {
        //자바스크립트에서 데이터 가져오는 방법
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a3c2b7c652a8a847c713f7040bb7cc1d&language=ko-KO&query=${query}&page=1&include_adult=false&region=KR`)
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        //리엑트에서 데이터 가져오는 방법
        fetch("https://api.themoviedb.org/3/search/movie?api_key=a3c2b7c652a8a847c713f7040bb7cc1d&language=ko-KO&query=marvel&page=1&include_adult=false&region=KR")
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'cd899b7274msh596cd06f630aefdp1b8282jsn72ce399608b0',
    //             'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
    //         }
    //     };
        
    //     fetch('https://airbnb13.p.rapidapi.com/search-location?location=seoul&checkin=2022-11-11&checkout=2022-11-17&adults=1&children=0&infants=0&page=1&count=5', options)
    //         .then(response => response.json())
    //         .then(result => setAirbnb(result.results))
    //         .catch(err => console.error(err));
    // }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["movie", "reference api"]} />
                <MovieList list={listmovies}/>
                <MovieSearch onSearch={search} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Movie;
