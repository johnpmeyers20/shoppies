import React from 'react';


const MovieList = (props) => {
  const AddNominee = props.addNominee;
  // const AddNominee = props.addNomComp;
  // const RemoveNominee = props.removeNomComp;
  // const nominees = props.nominees;

  // console.log('MovieList nominees', nominees);

  // const addOrRemove = (movie) => {
  //   console.table(nominees);
  //   console.log('addOrRemove entered');
  //   if (nominees.includes(movie)) {
  //     console.log('if entered');
  //     // return <RemoveNominee />;
  //   }
  //   else {
  //     // return <AddNominee />;
  //   }
  // };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="container" key={movie.imdbID}>
          <div className="image-container d-flex justify-content-start m-1">
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
