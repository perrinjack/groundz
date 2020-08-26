import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders U.K link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/U.K/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/united-kingdom');
});

test('renders australia link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Australia/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/australia');
});

test('renders new zealand link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/New Zealand/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/new-zealand');
});
