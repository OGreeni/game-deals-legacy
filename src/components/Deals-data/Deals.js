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
      <div
        className={classes.card}
        onClick={dealClickHandler.bind(null, deal.cheapestDealID)}
      >
        <img
          className={classes['deal-image']}
          src={deal.thumb}
          alt={'Not found'}
        />
        <h2 className={classes.title}>{deal.external}</h2>
        <h3 className={classes.price}>Price: ${deal.cheapest}</h3>
      </div>
    );
  });
};

export default Deals;
