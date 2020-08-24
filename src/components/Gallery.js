import React from 'react';

const Gallery = (props) => {
  const results = props.data;
  let images;

  images = results.map((image) => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <h4>This would be an image component</h4>;
  });

  return (
    <div>
      <br></br>
      <div >{images}</div>
    </div>
  );
};

export default Gallery;
