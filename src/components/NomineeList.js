import React from 'react';

const NomineeList = (props) => {
  const nominees = props.nominees;

  // console.log('NomineeList');

  return (
    <>
      {props.nominees.map((nominee, index) => (
        <div className="container" key={nominee.imdbID}>
          <div className="image-container d-flex justify-content-start m-1">
            <img src={nominee.Poster} alt="movie" />
            <div
              // onClick={() => props.handleAddNom(movie)}
              onClick={() => props.handleNominee(nominee)}
              className="overlay d-flex align-items-center justify-content-center">
              {/* {addOrRemove(movie)} */}
              {/* {nominees} */}
            </div>
          </div>
          <div className="movie-info">
            <h5>{nominee.Title} ({nominee.Year})</h5>
          </div>
        </div>
      ))}
    </>
  )
}

export default NomineeList;