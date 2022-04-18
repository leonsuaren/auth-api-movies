import { useState, useEffect } from 'react';

export const useGetHomeMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const homeMoviesUrl = `${apiBaseUrl}/movies/upcoming?api_key=${apiKey}`

  useEffect(() => {

  }, []);

  return [loading, movies, error];
}