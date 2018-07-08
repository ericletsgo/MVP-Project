import React from 'react';

import Square from './square.jsx';

const Board = () => {
  const board =[];
  for (let i = 1; i <= 8; i++){
    const rows = [];
    for (let j = 1; j <= 8; j++) {
      rows.push(<Square />)
    }
    board.push(rows);
  }
  return (
    <div>
      {board}
    </div>
  )
};

export default Board;
