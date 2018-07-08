import React from 'react';

class Pawn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: undefined,
    }
  }

  movement(){

  }

  render() {
    if (this.state.color === 'white') {
      return (
        <span>♙</span>
      )
    } else if (this.state.color === 'black') {
      return (
        <span>♟</span>
      )
    }
  }
}

export default Pawn;
