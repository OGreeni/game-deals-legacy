import React from 'react';
import GameForm from './components/UI/GameForm';
import classes from './App.module.css';

const App = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <a className={classes['navbar__brand']} href="index.html">
          GameDeals
        </a>
      </nav>
      <div className="container fluid">
        <GameForm />
      </div>
    </>
  );
};

export default App;
