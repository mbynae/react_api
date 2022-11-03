import React from 'react';

// const MovieBox = (adult) => {
//     return (
//         <div>{adult}</div>
//     );
// };


const MovieCont = ({ movies }) => {
    console.log(movies);
  return (
    <section className='cont__movie'>
        <div className='container'>
            <div className='movie__inner'>
                <div className='movie__box'>
                    {/* {movies.map((data) => (
                        <MovieBox adult={data.adult} />
                    ))} */}
                </div>
            </div>
        </div>
    </section>
  );
}

export default MovieCont