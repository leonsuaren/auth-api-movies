import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

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
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1fb720b97cc13e580c2c35e1138f90f8&language=en-US').then(((response) => {
    setGenres(response.data.genres)
    })).catch((error) => {

    })
    return () => {
      setLoading(false);
    }
  }, []);

  return [loading, movies, error , genres];
}