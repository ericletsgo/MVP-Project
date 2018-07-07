import React from 'react';
import axios from 'axios';

import Board from './board.jsx';
import Pawn from './pawn.jsx';
import Bishop from './bishop.jsx';
import Knight from './knight.jsx';
import Rook from './rook.jsx';
import Queen from './queen.jsx';
import King from './king.jsx';

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
