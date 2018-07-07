import React from 'react';
import axios from 'axios';

import Board from './components/board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Board />
      </div>)
  }
}

export default App;
