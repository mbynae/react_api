import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import SwiperCoverflow from "./components/include/MovieList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <SwiperCoverflow /> */}
    </React.StrictMode>
);
