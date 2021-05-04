import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Top from './components/Top';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import NomineeList from './components/NomineeList';
// import AddNominee from './components/AddNominee';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=1f020500&s=${searchValue}`;
    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      const resJsonVals = resJson.Search
      const uniques = resJsonVals.filter((v,i,a) => a.map(film => film.imdbID).indexOf(v.imdbID) === i);
      // console.log(uniques);
      setMovies(uniques);
    }
  }

  useEffect(() => {
    // console.log('useEffect');
    getMovieRequest(searchValue);
  }, [searchValue]);

  const handleNominee = (movie) => {
    if (nominees.includes(movie)) {
      let newNomineeList = nominees.filter(film => film.imdbID !== movie.imdbID);
      let newMoviesList = [...movies, movie];
      setNominees(newNomineeList);
      setMovies(newMoviesList);
    }
    else {
      if (nominees.length < 5) {
        let newNomineeList = [...nominees, movie];
        let newMoviesList = movies.filter(film => film.imdbID !== movie.imdbID);
        setNominees(newNomineeList);
        setMovies(newMoviesList);
      }
      else {
        console.log('A user can only nominate 5 movies');
      }
    }
  }

  return (
    <div className="container-fluid shoppies">
      <Top />
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          // addNominee={AddNominee}
          handleNominee={handleNominee}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Nominees' />
      </div>
      <div className="row d-inline-flex">
        <NomineeList
          nominees={nominees}
          // addNominee={AddNominee}
          handleNominee={handleNominee}/>
      </div>
    </div>
  )
}

export default App;