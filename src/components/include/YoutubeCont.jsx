import React from 'react'

const YoutubeItem = ({youtube}) => {

    return (
        <li>
            <img src={youtube} alt="" />
            {/* <em>
                <span className="title">{props.movie.name}</span>
                <span className="star">{props.movie.vote_average}</span>
            </em> */}
        </li>
    );
};

const YoutubeCont = ({youtubes}) => {
  return (
    <section className="cont__youtube">
        <div className="container">
            <div className="youtube__inner">
                <h2>Animal Youtube</h2>
                <ul>
                    {youtubes.map((youtube, index) => (
                        <YoutubeItem key={index} youtube={youtube.snippet.thumbnails.high.url} />
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );
}

export default YoutubeCont