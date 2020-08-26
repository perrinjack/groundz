import React from 'react';
import Image from './Image.js';
import Moment from 'moment';

const Gallery = (props) => {
  const results = props.data;
  let images;

  images = results.map((image) => {
    let title = image.title;
    let url = image.url_o;
    let description = image.description._content;
    let date_taken = Moment(image.datetaken).format('MMM Do YYYY');
    return (
      <Image
        url={url}
        title={title}
        description={description}
        date={date_taken}
      />
    );
  });

  return (
    <div>
      <br></br>
      <div className="row">{images}</div>
    </div>
  );
};

export default Gallery;
