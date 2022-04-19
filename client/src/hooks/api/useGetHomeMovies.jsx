import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetHomeMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const homeMoviesUrl = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    setLoading(true);
    axios.get(homeMoviesUrl).then((res) => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      setMovies(res.data.results);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  return [loading, movies, error];
}