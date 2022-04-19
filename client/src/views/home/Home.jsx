import React, { useState, useEffect } from 'react';
import { useGetHomeMovies } from './../../hooks/api';
import axios from 'axios';
import './styles.css';

export const Home = () => {
  const imageBaseUrl = 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
  const [loading, movies, error] = useGetHomeMovies();
  if (!movies) return null;
  console.log(movies)
  return (
    <div>
      {
        loading ? <h1>loading</h1> :
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="bd-placeholder-img img-style" src={`${imageBaseUrl}egoyMDLqCxzjnSrWOz50uLlJWmD.jpg`} />
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Homepage</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="bd-placeholder-img img-style" src={`${imageBaseUrl}x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg`} />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Homepage</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="bd-placeholder-img img-style" src={`${imageBaseUrl}ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg`} />

                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Homepage</a></p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      }
    </div>
  )
}