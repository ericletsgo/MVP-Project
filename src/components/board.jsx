import React from 'react';

import Row from './row.jsx';

function isEven(num){
  return num % 2 == 0
};

class Board extends React.Component {
  render() {
   let rows = []
   for(var i=1;i<=8;i++){
     rows.push(<Row number={i}/>)
   }
   return <div className="chess_board">{rows}</div>;
  }
};

export default Board;
