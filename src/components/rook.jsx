import React from 'react';

class Rook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: undefined,
    }
  }

  render() {
    if (this.state.color === 'white') {
      return (
        <span>♖</span>
      )
    } else if (this.state.color === 'black') {
      return (
        <span>♜</span>
      )
    }
  }
}

export default Rook;
