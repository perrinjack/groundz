import React from 'react';
import Image from './Image.js';
const Gallery = (props) => {
  const results = props.data;
  let images;

  images = results.map((image) => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.originalsecret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    let description = image.description._content;
    return <Image url={url} title={title} description={description} />;
  });

  return (
    <div>
      <br></br>
      <div className="row">{images}</div>
    </div>
  );
};

export default Gallery;
