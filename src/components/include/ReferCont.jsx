import React from "react";

// const referInfo = [
//     {
//         num: 1,
//         name: "animation-fill-mode",
//         desc: "animation-fill-mode은 애니메이션이 끝난 후의 상태를 설정합니다.",
//         star: "⭐⭐⭐⭐🌚",
//     },
//     {
//         num: 2,
//         name: "animation-delay",
//         desc: "animation-delay은 애니메이션 지연 시간을 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
//     {
//         num: 3,
//         name: "animation-direction",
//         desc: "animation-direction은 애니메이션 움직임 방향을 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
//     {
//         num: 4,
//         name: "animation-duration",
//         desc: "animation-duration은 애니메이션 움직임 시간을 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
//     {
//         num: 5,
//         name: "animation-iteration-count",
//         desc: "animation-iteration-count은 애니메이션의 반복 횟수를 설정합니다.",
//         star: "⭐⭐⭐🌚🌚",
//     },
//     {
//         num: 6,
//         name: "background-attachment",
//         desc: "background-attachment는 배경 이미지의 고정 여부를 설정합니다.",
//         star: "⭐⭐⭐🌚🌚",
//     },
//     {
//         num: 7,
//         name: "background-color",
//         desc: "background-color는 백그라운드 색을 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
//     {
//         num: 8,
//         name: "background-image",
//         desc: "background-image는 백그라운드 이미지 속성을 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
//     {
//         num: 9,
//         name: "background-position",
//         desc: "background-position는 백그라운드 이미지의 위치 영역을 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
//     {
//         num: 10,
//         name: "background-repeat",
//         desc: "background-repeat는 백그라운드 이미지 반복 여부를 설정합니다.",
//         star: "⭐⭐⭐⭐⭐",
//     },
// ];

// const ReferText = ({ num, name, desc, star }) => {
//     return (
//         <li>
//             <a href="/">
//                 <span className="num">{num}</span>
//                 <span className="name">{name}</span>
//                 <span className="desc">{desc}</span>
//                 <span className="star">{star}</span>
//             </a>
//         </li>
//     );
// };

const ReferText = ({num, title, desc, star}) => {
    return (
        <li>
            <a href="#">
                <span className="num">{num}</span>
                <span className="name">{title}</span>
                <span className="desc">{desc}</span>
                <span className="star">{star}</span>
            </a>
        </li>
    );
};

const ReferCont = ({ references }) => {     //페이지에서 뿌려준 변수를 이렇게 받아와야 함
    console.log(references)
    return (
        <section className="cont__refer">
            <div className="container">
                <div className="refer__inner">
                    <h2>CSS</h2>
                    <ul className="refer__list">
                        {references.map((refer, idx) => (
                            <ReferText 
                                key = {idx}
                                num = {refer.num}
                                title = {refer.title}
                                desc = {refer.desc}
                                star = {refer.descStar}
                            />
                        ))};
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferCont;
