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
import Alert from './components/Alert';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);
  console.log(nominees.length);
  console.log(nominees);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=1f020500&s=${searchValue}&type=movie`;
    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      const resJsonVals = resJson.Search
      const uniques = resJsonVals.filter((v, i, a) => a.map(film => film.imdbID).indexOf(v.imdbID) === i);
      setMovies(uniques);
    }
  }

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('shoppies-favorites')
    );
    console.log('movieFavorites in useEffect 33', movieFavorites)
    if (movieFavorites) setNominees(movieFavorites);
    getMovieRequest(searchValue);
  }, [searchValue]);

  const saveToLocalStorage = items => {
    localStorage.setItem('shoppies-favorites', JSON.stringify(items));
  }

  const handleNominee = (movie) => {
    const removeFromArr = (arr, obj) => arr.filter(i => i.imdbID !== obj.imdbID);
    const addToArr = (arr, obj) => [...arr, obj];
    
    let newNomineeList = nominees;
    let newMovieList = movies;

    if (nominees && nominees.includes(movie)) {
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
      console.log('nominees71', nominees);
      if (nominees && nominees.length < 5) {
        newNomineeList = addToArr(nominees, movie);
        newMovieList = removeFromArr(movies, movie);
      }
      else {
        console.log("Only 5 films can be nominated");
      }
    }

    setNominees(newNomineeList);
    setMovies(newMovieList);
    saveToLocalStorage(newNomineeList);
  }
  const showAlert = nominees && nominees.length > 4 ? <Alert /> : null;

  return (
    <div className="container-fluid shoppies">
      <Top />
      {showAlert}
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      { movies.length === 0
        ?
          nominees && nominees.length > 0 ? <p>Welcome back! Continue nominating films by searching with the search box in the upper right-hand corner</p> : <CallToAction /> 
        :
        null
      }
      <div className="row">
        <MovieList
          movies={movies}
          handleNominee={handleNominee}
          addNominee={AddNominee}
          nominees={nominees}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Nominees' noms={nominees}/>
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