import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Item from './components/Item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item location = "australia" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
