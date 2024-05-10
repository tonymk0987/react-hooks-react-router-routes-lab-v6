import React from 'react';
import { Link } from 'react-router-dom';

function Movie() {
  return (
    <>
      <header>
        <Link to="/">Home</Link> 
      </header>
      <main>
        <h1>Movie</h1>
      </main>
    </>
  );
}

export default Movie;
