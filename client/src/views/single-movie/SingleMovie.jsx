import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

import { ImageCard } from '../../components/image-card';

export const SingleMovie = React.memo(() => {
  const params = useParams();
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const imageBaseUrl = 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
  const [movie, setMovie] = useState();
  const [media, setMedia] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiBaseUrl}/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}`).then((response) => {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
      setMovie(response.data);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
    //https://api.gdriveplayer.us/v1/imdb/tt1285016
    axios.get(`https://api.gdriveplayer.us/v1/imdb/tt1285016`).then((response) => {
      console.log(response);
    });
    axios.get(`${apiBaseUrl}/movie/${params.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`).then((response) => {
      setMedia(response.data.results);
    }).catch(() => {

    });
  }, []);
  if (!movie) return null;
  if (!media) return null;
  // console.log(movie)
  return (
    <main>
      <img src={`${imageBaseUrl}${movie.backdrop_path}`} className="image-background" />
      <div className="custom-bg"></div>
      <div className="col-md-5 p-lg-5 mx-auto my-5 detail-container">
        <div className='detail-wrapper'>
          <div>
            <ImageCard 
            poster_path={movie.poster_path}
            original_title={movie.original_title}
            overview={movie.overview}
            />
          </div>
          <div>
            <h1 className="display-4 fw-normal header-title">{movie.original_title} <span>{`( ${movie.release_date.slice(0, 4)} )`}</span></h1>
            <p className="release-section">
            {movie.release_date} 
            <span className='floating-dot'>.</span> 
            {`( ${movie.production_countries[0].iso_3166_1} )`}
            <span className='floating-dot'>.</span>
            {
              movie.genres.map((genre, key) => {
                return(
                  <span key={key}>{genre.name}  </span>
                  )
              })
            }
            <span className='floating-dot'>.</span>
            </p>
            <h4 className="description">{movie.overview}</h4>
            <a className="btn btn-primary" href={`${movie.homepage}`} target='_blank'>Home Page</a>
            <div className="col-md-5 p-lg-5 mx-auto my-5">
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})