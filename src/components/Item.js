import React from 'react';
import apiKey from '../config.js';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      apiResponse: null,
    };
  }

  render() {
    return <h1>hello</h1>;
  }
}
