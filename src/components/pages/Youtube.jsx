import React from "react";
import {useState, useEffect} from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
    const [youtubes, setYoutube] = useState([]);
    const [randoms, setRandom] = useState([]);

    const search = async (query) => {
        //자바스크립트에서 데이터 가져오는 방법
        await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDNb11gN29B9i3IJduoczfIuN39W2env60&count=20&maxResults=20`)
            .then((response) => response.json())
            .then((result) => setYoutube(result.items))
            .catch((error) => console.log(error));
    };

    const button = async (query) => {
        //자바스크립트에서 데이터 가져오는 방법
        await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDNb11gN29B9i3IJduoczfIuN39W2env60&count=20&maxResults=20`)
            .then((response) => response.json())
            .then((result) => setYoutube(result.items))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=animal&key=AIzaSyDNb11gN29B9i3IJduoczfIuN39W2env60&count=20&maxResults=20`)
        .then((response) => response.json())
        .then((result) => setYoutube(result.items))
        .catch((error) => console.log(error));

        fetch("https://youtube.googleapis.com/youtube/v3/search?asdasd=asd&part=snippet&q=잔잔한노래&key=AIzaSyDNb11gN29B9i3IJduoczfIuN39W2env60&count=20&maxResults=20&regionCode=kr")
        .then((response) => response.json())
        .then((result) => setRandom(result.items))
        .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <Header />
            <Contents>
                <Title title={["youtube", "reference api"]} />
                <YoutubeSlider random={randoms}/>
                <YoutubeSearch onSearch={search} onButton={button} />
                <YoutubeCont youtubes={youtubes} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Youtube;
