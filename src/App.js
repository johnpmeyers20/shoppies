import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import AddNominee from './components/AddNominee';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=1f020500&s=${searchValue}`;
    const res = await fetch(url);
    const resJson = await res.json();

    // console.log('getMovieRequest');

    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  }

  useEffect(() => {
    // console.log('useEffect');
    getMovieRequest(searchValue);
  }, [searchValue]);


  const handleNominee = (movie) => {
    // console.log('handleNominee');
    let newNomineeList = nominees.includes(movie) ?
      nominees.filter((nominee) => nominee.imdbID !== movie.imdbID) :
      [...nominees, movie];
    let newMoviesList = movies.includes(movie) ?
      movies.filter((film) => film.imdbID !== movie.imdbID) :
      [...movies, movie];
    setMovies(newMoviesList);
    setNominees(newNomineeList);
  }

  return (
    <div className="container-fluid shoppies">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          addNominee={AddNominee}
          handleNominee={handleNominee}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading='Nominees' />
      </div>
      <div className="row d-inline-flex">
        <MovieList
          movies={nominees}
          addNominee={AddNominee}
          handleNominee={handleNominee}/>
      </div>
    </div>
  )
}

export default App;