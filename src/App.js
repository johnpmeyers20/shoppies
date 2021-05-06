import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Top from './components/Top';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import NomineeList from './components/NomineeList';
import AddNominee from './components/AddNominee';
import RemoveNominee from './components/RemoveNominee';
import CallToAction from './components/CallToAction';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=1f020500&s=${searchValue}&type=movie`;
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
    const removeFromArr = (arr, obj) => arr.filter(i => i.imdbID !== obj.imdbID);
    const addToArr = (arr, obj) => [...arr, obj];
    
    let newNomineeList = nominees;
    let newMovieList = movies;

    if (nominees.includes(movie)) {
      newNomineeList = removeFromArr(nominees, movie);
      if (!movies.includes(movie)) {
        const movieTitleArr = movie.Title.split(' ').map(i => i.toLowerCase());
        if (movieTitleArr.includes(searchValue.toLowerCase())) {
          newMovieList = addToArr(movies, movie);
        }
        console.log('movieTitle', movieTitleArr);
        console.log('searchValue', searchValue);
      }
    }
    else {
      if (nominees.length < 5) {
        newNomineeList = addToArr(nominees, movie);
        newMovieList = removeFromArr(movies, movie);
      }
      else {
        console.log("Only 5 films can be nominated");
      }
    }

    setNominees(newNomineeList);
    setMovies(newMovieList);

  }

  return (
    <div className="container-fluid shoppies">
      <Top />
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <CallToAction />
      <div className="row">
        <MovieList
          movies={movies}
          handleNominee={handleNominee}
          addNominee={AddNominee}
          nominees={nominees}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Nominees' />
      </div>
      <div className="row d-inline-flex">
        <NomineeList
          nominees={nominees}
          handleNominee={handleNominee}
          removeNominee={RemoveNominee}
        />
      </div>
    </div>
  )
}

export default App;