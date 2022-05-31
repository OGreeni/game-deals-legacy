import React from 'react';
import GameForm from './components/UI/GameForm';
import classes from './App.module.css';

const App = () => {
  return (
    <>
      <nav className={classes.topnav}>
        <a className={classes.active} href="#">
          GameDeals
        </a>
        <a href="#">Get deals</a>
        <div className={classes['topnav-right']}>
          <a href="#">Log in</a>
          <a href="#">About</a>
        </div>
      </nav>
      <div>
        <GameForm />
      </div>
    </>
  );
};

export default App;
