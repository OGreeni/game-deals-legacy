import React from 'react';
import classes from './Deals.module.css';

const Deals = (props) => {
  // debug key console error
  const transformedDealsData = props.dealsData.map((dealData, index) => {
    return { ...dealData, key: index };
  });

  const dealClickHandler = (...args) => {
    window.location.href = `https://www.cheapshark.com/redirect?dealID={${args[0]}}`;
  };

  return transformedDealsData.map((deal) => {
    return (
      <button onClick={dealClickHandler.bind(null, deal.cheapestDealID)}>
        <div className={classes.card}>
          <img
            className={classes['deal-image']}
            src={deal.thumb}
            alt={'Not found'}
          />
          <div>
            <h1 className={classes.title}>{deal.external}</h1>
            <h2 className={classes.price}>Cheapest price: ${deal.cheapest}</h2>
          </div>
        </div>
      </button>
    );
  });
};

export default Deals;
