import React, { useState, useEffect } from 'react';
import Deals from './Deals';
import './FetchDeals.css';

const FetchDeals = (props) => {
  const [dealsData, setDealsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (props.finalFormData !== '') {
        const response = await fetch(
          `https://www.cheapshark.com/api/1.0/games?title=${props.finalFormData}&limit=60&exact=0`
        );
        setDealsData(await response.json());
      }
    };
    fetchData();
  }, [props.finalFormData]);

  return (
    <>
      <br />
      {props.finalFormData === '' && <p>No deals found.</p>}
      {props.finalFormData !== '' && <Deals dealsData={dealsData} />}
    </>
  );
};

export default FetchDeals;
