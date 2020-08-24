import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Gallery from './components/Gallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
