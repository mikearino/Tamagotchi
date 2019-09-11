import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Feed from './Feed'
import Play from './Play'
import Rest from './Rest'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      health: 10,
      fullness: 10,
      happiness: 10
    }
  }

  handlePlay =() => {
    const newPlay = this.state.happiness + 1;
    this.setState({happiness: newPlay})
  }

  handleRest =() => {
    const newRest = this.state.health + 1;
    this.setState({health: newRest})
  }

  handleFeed =() => {
    const newFullness = this.state.fullness + 1;
    this.setState({fullness: newFullness})
  }

  render() {
    return (
      <div>
      <Header/>
      <Container>
      <Row>
      <Col>Health: {this.state.health}</Col>
      <Col>Fullness: {this.state.fullness}</Col>
      <Col>Happiness: {this.state.happiness}</Col>
      </Row>

      <Row>
      <Col><Rest onRest={this.handleRest}/></Col>
      <Col><Feed onFeed={this.handleFeed}/></Col>
      <Col><Play onPlay={this.handlePlay}/></Col>
      </Row>
      </Container>
      </div>
    );
  }
}

export default App;
