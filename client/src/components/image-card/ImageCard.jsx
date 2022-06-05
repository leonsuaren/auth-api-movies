import React from 'react';

export const ImageCard = ({ poster_path, original_title, overview }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'
  console.log(poster_path)
  return (
    <div className="card">
      <img src={`${imageBaseUrl}${poster_path}`} className="card-img-top" alt={original_title} />
      <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  )
}