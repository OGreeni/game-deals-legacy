import React from 'react';
import GameForm from './components/UI/GameForm';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>GameDeals</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container fluid">
        <GameForm />
      </div>
    </>
  );
};

export default App;
