import React, { useState } from 'react';
import FetchDeals from '../Deals-data/FetchDeals';
import classes from './GameForm.module.css';

const GameForm = () => {
  const [formData, setFormData] = useState('');
  const [finalFormData, setFinalFormData] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFinalFormData(formData);
    setFormData('');
  };

  const formChangeHandler = (event) => {
    setFormData(event.target.value);
  };

  return (
    <>
      <div className={classes['main-title']}>
        <h1>GameDeals - Search to Find Deals!</h1>
      </div>
      <form onSubmit={formSubmitHandler}>
        <input
          onChange={formChangeHandler}
          value={formData}
          placeholder=" E.g. Minecraft"
          type="text"
        ></input>
        <button type="submit">Get Deals!</button>
      </form>
      <FetchDeals finalFormData={finalFormData} />
    </>
  );
};

export default GameForm;
