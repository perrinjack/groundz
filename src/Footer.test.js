import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Footer from './components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Copyright text is displayed', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/© 2020 Copyright: J Perrin/i);
  expect(linkElement).toBeInTheDocument();
});
