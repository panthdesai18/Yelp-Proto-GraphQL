import React from 'react';
import ReactDOM from 'react-dom';
import CustRest from './CustRest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustRest/>, div);
  ReactDOM.unmountComponentAtNode(div);
});