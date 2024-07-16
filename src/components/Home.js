import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo">Excurrency</div>
        <nav className="home-nav">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </nav>
      </header>
      <main className="home-main">
        <h1>Welcome to Excurrency</h1>
        <p>The best way to check exchange rates of currencies</p>
        <div className="home-buttons">
          <Link to="/login"><button className="home-button">Log In</button></Link>
          <Link to="/signup"><button className="home-button">Sign Up</button></Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
