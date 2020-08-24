import React from 'react';
import { apiKey } from '../config.js';
import axios from 'axios';
import Gallery from './Gallery.js';
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      apiResponse: null,
    };
  }

  async searchImages() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.location}&per_page=1&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          apiResponse: <Gallery data={Response.data.photos.photo} />,
        });
      })
      .catch((error) => {
        console.log(
          'Encountered an error with fetching images from Flickr',
          error
        );
      });
  }

  componentDidMount() {
    this.searchImages();
  }

  render() {
    return <h1>{this.state.apiResponse}</h1>;
  }
}
