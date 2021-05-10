import React from 'react';


const MovieList = (props) => {
  const AddNominee = props.addNominee;
  const nominees = props.nominees;
  // console.log(nominees);

  const movieList = props.movies.map((movie, index) => (
    <div className="container" key={movie.imdbID}>
      <div className="image-container d-flex justify-content-center m-2">
        <img src={movie.Poster} alt="movie" />
        { nominees === null || nominees.length < 5 ?
          <div
            onClick={() => props.handleNominee(movie)}
            className="overlay d-flex align-items-center justify-content-center">
            <AddNominee />
          </div>
          :
          console.log('cray cray')
        } 
      </div>
      <div className="movie-info">
        <h5>{movie.Title} ({movie.Year})</h5>
      </div>
    </div>
  ))

  return (
    <>
      {movieList}
    </>
  )
}

export default MovieList;
