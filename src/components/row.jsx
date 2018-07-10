import React from 'react';

import Square from './square.jsx';

class Row extends React.Component{
  render() {
    let row=[];
   for (let i=1;i<=8;i++){
     row.push(<Square number={(this.props.number-1)*8 + i}/>)
   }
   return <div className="chess_row">{row}</div>
  }
};

export default Row;
