import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

function Header() {

  return (
    <div>
    <Jumbotron fluid>
    <Container>
    <h1>Tamagotchi</h1>
    <p>Eat, Sleep, Play, Repeat.</p>
    </Container>
    </Jumbotron>
    </div>
  );
}

export default Header;
