import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

export const SingleMovie = React.memo(() => {
  const params = useParams();
  const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
  const apiBaseUrl = 'http://api.themoviedb.org/3';
  const imageBaseUrl = 'http://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState();
  const [media, setMedia] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiBaseUrl}/movie/${params.movieId}?api_key=${apiKey}`).then((response) => {
      setMovie(response.data);
    }).catch((error) => {
      console.log(error);
    });
    axios.get(`${apiBaseUrl}/movie/${params.movieId}/videos?api_key=${apiKey}`).then((response) => {
      setMedia(response.data.results);
    }).catch(() => {

    });
  }, []);
  if (!movie) return null;
  if (!media) return null;
  console.log(media)
  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <img src={`${imageBaseUrl}/${movie.backdrop_path}`} className='bg-image image-background' />
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">{movie.original_title}</h1>
          <p className="lead fw-normal">{movie.overview}</p>
          <a className="btn btn-primary" href={`${movie.homepage}`} target='_blank'>Home Page</a>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">{movie.tagline}</h2>
          </div>
          <div className="bg-light shadow-sm mx-auto aditional-style" >
            <img src={`${imageBaseUrl}/${movie.poster_path}`} className='bg-image img-responsive img-fluid rounded' />
          </div>
        </div>
        <div className=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Watch it First</h2>
          </div>
          <div className="bg-dark shadow-sm mx-auto aditional-style" >
            <iframe className='media'
              src={`https://www.youtube.com/embed/${media[0].key}`}>
            </iframe>
          </div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Thriller</h2>
          </div>
          <div className="shadow-sm mx-auto aditional-style" >
            <iframe className='media'
              src={`https://www.youtube.com/embed/${media[1].key}`}>
            </iframe>
          </div>
        </div>
        <div className="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto aditional-style" ></div>
        </div>
      </div>
    </main>
  )
})

// <div className="product-device shadow-sm d-none d-md-block"></div>
// <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>