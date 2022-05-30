import React, { useState } from 'react';
import FetchDeals from '../Deals-data/FetchDeals';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <br />
      <h1>Search to find deals!</h1>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Enter Game Here:</Form.Label>
          <Form.Control
            onChange={formChangeHandler}
            value={formData}
            placeholder=" E.g. Minecraft"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Get Deals!
        </Button>
      </Form>
      <FetchDeals finalFormData={finalFormData} />
    </>
  );
};

export default GameForm;
