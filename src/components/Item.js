import React from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import Gallery from './Gallery.js';
import Loader from 'react-loader-spinner';
const API_KEY = process.env.REACT_APP_API_KEY;
//imports above
const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker({ delay: 2000 });

  return (
    promiseInProgress && (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type="ThreeDots" color="#2BAD60" height="300" width="300" />
      </div>
    )
  );
};

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      imageHTML: null,
    };
  }

  async searchImages() {
    trackPromise(
      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${this.state.location}&user_id=189820810@N06&extras=description,date_taken,url_o&format=json&nojsoncallback=1`
        )
        .then((response) => {
          console.log(response);
          this.setState({
            imageHTML: <Gallery data={response.data.photos.photo} />,
          });
        })
        .catch((error) => {
          console.log(
            'Encountered an error with fetching images from Flickr',
            error
          );
        })
    );
  }

  componentDidMount() {
    this.searchImages();
  }

  render() {
    return (
      <div>
        <LoadingIndicator />
        {this.state.imageHTML}
      </div>
    );
  }
}
