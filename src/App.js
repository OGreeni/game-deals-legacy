import React from 'react';
import GameForm from './components/UI/GameForm';
import classes from './App.module.css';
import githubLogo from './Dependencies/github-logo.png';

const App = () => {
  return (
    <>
      <nav className={classes.topnav}>
        <a className={classes.active} href="#">
          GameDeals
        </a>
        <div className={classes['topnav-right']}>
          <a href="#">Log in</a>
          <a href="#">About</a>
        </div>
      </nav>
      <div className={classes['github-link']}>
        <a href="https://github.com/OGreeni/game-deals-site">
          <img
            className={classes['github-link-image']}
            src={githubLogo}
            alt="GitHub"
          ></img>
        </a>
      </div>
      <div>
        <GameForm />
      </div>
    </>
  );
};

export default App;
