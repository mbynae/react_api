import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__inner">
                <div>
                    <h3>email</h3>
                    {/* 여기는 페이지 이동이 아니기 때문에 링크를 서도됨 */}
                    <a href="mailto:piowm123@gmail.com">piowm123@gmail.com</a>
                </div>
                <div>
                    <h3>kakao</h3>
                    <a href="/">piowm123</a>
                </div>
                <div>
                    <h3>social</h3>
                    <ul>
                        <li>
                            <a href="/">youtube</a>
                        </li>
                        <li>
                            <a href="/">instargram</a>
                        </li>
                        <li>
                            <a href="/">github</a>
                        </li>
                        <li>
                            <a href="/">blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
