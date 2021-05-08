import React from 'react';


const MovieList = (props) => {
  const AddNominee = props.addNominee;
  const nominees = props.nominees;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="container" key={movie.imdbID}>
          <div className="image-container d-flex justify-content-center m-1">
            <img src={movie.Poster} alt="movie" />
            {nominees === [] || nominees.length < 5 ?
              <div
                onClick={() => props.handleNominee(movie)}
                className="overlay d-flex align-items-center justify-content-center">
                <AddNominee />
              </div>
              :
              null
            } 
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
