import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieItem/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  };

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movie</button>
      </section>

      <section>
        <MovieList movies={movies} />
      </section>
    </>
  );
}

export default App;
