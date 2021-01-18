import React from 'react';

const MovieList = (props) => {
  const AddNominee = props.addNominee;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="container">
          <div className="image-container d-flex justify-content-start m-1" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie" />
            <div
              onClick={() => props.handleNominee(movie)}
              className="overlay d-flex align-items-center justify-content-center">
              <AddNominee />
            </div>
          </div>
          <div className="movie-info">
            <h5>{movie.Title} ({movie.Year})</h5>
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieList;
