import React from 'react';


const MovieList = (props) => {
  const AddNominee = props.addNomComp;
  const RemoveNominee = props.removeNomComp;
  const nominees = props.nominees;

  const addOrRemove = (movie) => {
    console.table(nominees);
    console.log('addOrRemove entered');
    if (nominees.includes(movie)) {
      console.log('if entered');
      return <RemoveNominee />;
    }
    else {
      return <AddNominee />;
    }
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="container">
          <div className="image-container d-flex justify-content-start m-1" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie" />
            <div
              onClick={() => props.handleAddNom(movie)}
              className="overlay d-flex align-items-center justify-content-center">
              {addOrRemove(movie)}
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
