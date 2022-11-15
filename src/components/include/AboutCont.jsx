import React from "react";

const AboutCont = () => {
    let scroll = document.querySelector(".scrollTop");
    
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        scroll.innerText = Math.round(scrollTop);
    });


    return (
        <section className="cont__about">
            <div className="scrollTop">0</div>
            <article className="about__article">
                <div className="first__left">
                    <p>
                        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                    <img src="./assets/img/aboutfirstL.jpg" alt="첫번째L" />
                    <h3>타이틀 제목</h3>
                </div>
                <div className="first__right">
                    <h3>타이틀 제목</h3>
                    <img src="./assets/img/aboutfirstR.jpg" alt="첫번째R" />
                    <p>
                        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                </div>
            </article>
            <article className="about__article">
                <div className="first__left">
                    <p>
                        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                    <img src="./assets/img/aboutfirstL.jpg" alt="첫번째L" />
                    <h3>타이틀 제목</h3>
                </div>
                <div className="first__right">
                    <h3>타이틀 제목</h3>
                    <img src="./assets/img/aboutfirstR.jpg" alt="첫번째R" />
                    <p>
                        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </p>
                </div>
            </article>
        </section>
    );
};

export default AboutCont;
