import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    setLoading(true);
    axios.get(nowPlayingUrl).then((response) => {
      setMovies(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  return [loading, movies, error];
}