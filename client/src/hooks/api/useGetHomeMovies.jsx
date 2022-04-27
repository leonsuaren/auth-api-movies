import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetHomeMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const homeMoviesUrl = `${apiBaseUrl}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    setLoading(true);
    axios.get(homeMoviesUrl).then((res) => {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
      setMovies(res.data.results);
    }).catch((error) => {
      setError(error);
      setLoading(true);
    });
  }, []);

  return [loading, movies, error];
}