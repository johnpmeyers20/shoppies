import React from 'react';


const MovieList = (props) => {
  const AddNominee = props.addNominee;
  const nominees = props.nominees;
  // console.log(nominees);

  const movieGrid = props.movies.map((movie, index) => (
    <div className="container" key={movie.imdbID}>
      <div className="image-container d-flex justify-content-center m-0">
        <img src={movie.Poster} class="img-fluid" alt="movie" />
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

  const movieList = props.movies.map((movie, index) => (
    <div>
      {/* Fill this badboy ott manana
        We want a simple list view of the films here
      */}
    </div>
  ))

  return (
    <div className="row">
      {movieGrid}
    </div>
  )
}

export default MovieList;
