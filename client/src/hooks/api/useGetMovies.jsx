import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = usestate(null);
  const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    setLoading(true);
    axios.get();
  }, []);

  return [loading, movies, error];
}