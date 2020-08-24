import React from 'react';

const Gallery = (props) => {
  console.log(props.data);
  const results = props.data;
  let images;

  images = results.map((image) => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/sepuckett86/image/upload/v1513095416/IMG_7240_q9dadh.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-right font-italic">
              The Gabba, Brisbane. 2009
            </h6>
          </div>
        </div>
      </div>
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
