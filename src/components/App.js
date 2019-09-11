import React from 'react';
import '../App.css';
import Feed from './Feed'
import Play from './Play'
import Rest from './Rest'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      health: 10,
      hunger: 10,
      happiness: 10
    }
  }

render() {
  return (
    <div>
    <Header/>
      <Feed/>
      <Rest/>
      <Play/>
    </div>
  );
}

}

export default App;
