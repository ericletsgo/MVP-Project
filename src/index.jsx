import React from 'react';
import ReactDOM from 'react-dom';
import Chess from 'react-chess';
import App from './components/app.jsx';

const lineup = ['R@h1', 'P@f2', 'q@d8', 'R@a1', 'P@a2', 'P@c2', 'b@c8', 'p@d7', 'Q@d1', 'n@g8']

ReactDOM.render(<Chess pieces={lineup} />, document.getElementById('app'))
