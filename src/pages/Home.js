import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
    <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </main>
    </>
  );
}

export default Home;
