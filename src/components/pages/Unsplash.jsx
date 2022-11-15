import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashBtn from "../include/UnsplashBtn";
import Contact from "../layout/Contact";

const Unsplash = () => {
    const [images, setImages] = useState([]);
    const [randoms, setRandom] = useState([]);
    

    const search = async (query) => {
        //자바스크립트에서 데이터 가져오는 방법
        await fetch(`https://api.unsplash.com/search/photos?client_id=GFU0S66m9fkwgOoQ6SxTubYmsJazE-k1yygT2XVI-Uw&count=20&query=${query}`)
            .then((response) => response.json())
            .then((result) => setImages(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/random?client_id=GFU0S66m9fkwgOoQ6SxTubYmsJazE-k1yygT2XVI-Uw&count=20&query=animal")
            .then((response) => response.json())
            .then((result) => setImages(result))
            .catch((error) => console.log(error));

        fetch("https://api.unsplash.com/photos/random?client_id=GFU0S66m9fkwgOoQ6SxTubYmsJazE-k1yygT2XVI-Uw&w=300&h=300&fit=crop&count=12")
            .then((response) => response.json())
            .then((result) => setRandom(result))
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <Header />
            <Contents>
                <Title title={["unsplash", "reference api"]} />
                <UnsplashSlider random={randoms} />
                <UnsplashSearch onSearch={search} />
                <UnsplashBtn />
                <UnsplashCont images={images} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Unsplash;
