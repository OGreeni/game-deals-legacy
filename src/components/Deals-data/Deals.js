import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Deals.module.css';

const Deals = (props) => {
  // debug key console error
  const transformedDealsData = props.dealsData.map((dealData, index) => {
    return { ...dealData, key: index };
  });

  function dealClickHandler(...args) {
    window.location.href = `https://www.cheapshark.com/redirect?dealID={${args[0]}}`;
  }

  return transformedDealsData.map((deal) => {
    return (
      <button
        className={classes.box}
        onClick={dealClickHandler.bind(null, deal.cheapestDealID)}
      >
        <Card style={{ height: '14rem', width: '18rem' }}>
          <Card.Img variant="top" src={deal.thumb} style={{ height: '8rem' }} />
          <Card.Body>
            <Card.Title>{deal.external}</Card.Title>
            <Card.Title>Cheapest price: ${deal.cheapest}</Card.Title>
          </Card.Body>
        </Card>
        <br />
      </button>
    );
  });
};

export default Deals;
