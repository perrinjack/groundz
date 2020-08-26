import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Gallery from './components/Gallery';

const response = [
  {
    farm: 66,
    id: '50261976288',
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: '152960897@N08',
    secret: 'dd5be086f1',
    server: '65535',
    url_o: 'flickr.com/testphoto',
    title: 'Guthega Rocks',
    description: { _content: 'test' },
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery data={response} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
