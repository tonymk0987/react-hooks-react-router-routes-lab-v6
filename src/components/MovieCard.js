import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <article>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <Link to={`/movie/${id}`}></Link>
    </article>
  );
}

export default MovieCard;
