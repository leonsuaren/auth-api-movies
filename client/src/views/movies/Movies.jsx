import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useGetMovies } from '../../hooks/api';

export const Movies = () => {
  const [loading, movies, error] = useGetMovies();
  const [movieId, setMovieId] = useState();
  const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
  console.log(movies);

  return (
        <div className="row">
          {
            movies.map((movie, key) => {
              return (
                <div className="col-md-2" key={key}>
                  <Link to={`/movies/${movie.id}`} style={{textDecoration:'none'}}>
                    <div className="profile-card-4 text-center">
                      <img src={`${imageBaseUrl}${movie.poster_path}`} className="img" />
                      <div className="profile-content">
                        <div className="profile-description">{movie.overview.slice(0, 90)}</div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="profile-overview">
                              <p>Vote</p>
                              <h4>{movie.vote_average * 10 + '%'}</h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="profile-overview">
                              <p>Popularity</p>
                              <h4>{Math.floor(movie.popularity / 100)}</h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="profile-overview">
                              <p>Release Date</p>
                              <h6 className="release-date">{movie.release_date}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
  )
}