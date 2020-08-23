import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Navigation from './components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});


