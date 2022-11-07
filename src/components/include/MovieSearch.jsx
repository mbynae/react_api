import React, { useRef } from "react"; //인풋박스에선 useeffect가 아니라 useRef를 쓴다.

const MovieSearch = ({ onSearch }) => {
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
    return (
        <div className="movie__search">
            <div className="container">
                <h2>검색하기</h2>
                <input ref={inputRef} type="search" placeholder="검색하세요!" onKeyPress={onKeyPress} />
                <button type="submit" onClick={onClick}>
                    검색
                </button>
            </div>
        </div>
    );
};

export default MovieSearch;
