import React from 'react';
import { Link } from 'react-router-dom';

function Actors() {
  return (
    <>
      <header>
        <Link to="/">Home</Link> 
      </header>
      <main>
        <h1>Actors</h1>
      </main>
    </>
  );
}

export default Actors;
