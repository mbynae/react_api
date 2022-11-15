import React, { useRef } from "react";

const UnsplashSearch = ({ onSearch, onButton }) => {
  const inputRef = useRef();

  const handleSearch = () => {
      const value = inputRef.current.value;
      onSearch(value); //값이 무비의 무비서치로 가게 하기 위해 매개변수 처리를 함
  };

  const onKeyPress = (event) => {
      if (event.key === "Enter") {
          handleSearch();
      }
  };

  const onClick = () => {
      handleSearch();
  };

  const unsplashTag = document.querySelectorAll(".movie_tag span em");
  unsplashTag.forEach((e) => {
      e.addEventListener("click", () => {
          tagClick(e.innerText)
      });
  });    

  const tagClick = (data) => {
      onButton(data);
  };

  return (
      <div className="movie__search">
          <div className="container">
                <h2>검색하기</h2>
                <input ref={inputRef} type="search" placeholder="검색하세요!" onKeyPress={onKeyPress} />
                <button type="submit" onClick={onClick}>
                    검색
                </button>
                <div className="movie_tag">
                    <span>#<em>Landscape</em></span>
                    <span>#<em>human</em></span>
                    <span>#<em>animal</em></span>
                    <span>#<em>natural</em></span>
                    <span>#<em>city</em></span>
                    <span>#<em>food</em></span>
                </div>
          </div>
      </div>
  );
};

export default UnsplashSearch