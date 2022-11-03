import React from "react";
import { useState, useEffect } from "react";    //페이지 로딩없이 데이터만 변경해주는 리엑트에서만 쓰는 변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 클래스형 컨퍼넌트 / 함수형 컨퍼넌트  --> 리엑트 훅
//변수 : 저장, 추가, 변경 --> 자동

const Reference = () => {
    const [references, setReferences] = useState([]);   //리엑트 훅에서 변수 설정

    useEffect(() => {
        fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
        .then(response => response.json())      //체인이란 기능으로 점을 붙였기 때문에 세미콜론을 붙이면 안된다.
        // .then(result => console.log(result.data.htmlRefer))     //이런식으로 괄호안에 불러오고 싶은 값만 불러올 수 있음
        .then(result => setReferences(result.data.htmlRefer))       //reference에 저장된 값이 바뀌면 setReferences에서 자동으로 감지하기 때문에 setReferences에 데이터를 저장한다.
        .catch(error => console.log('error', error));
    }, []);

    // useEffect (() => {
    //     fetch("../../utils/reference.json")
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .then(result => setReferences(result.data.htmlRefer))
    //     .catch(error => console.log('error', error));
    // }, []);

    // https://mbynae.github.io/react_api/src/utils/reference.json
    return (
        <>
            <Header />
            <Contents>
                <Title title={["reference", "book"]} />
                {/* 그 후 이렇게 컴포넌트에 변수를 뿌려주면됨 그 후 해당 컴포넌트에서 변수를 불러와야된다.*/}
                <ReferCont references={references}/>    
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Reference;
