import React from 'react';

const Gallery = (props) => {
  let images;
  return (
      <div>
      <br></br>
    <div className="row">
     
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
          <img
            class="card-img-top"
            src="https://res.cloudinary.com/sepuckett86/image/upload/v1513176680/IMG_5837_xicdt5.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-right font-italic">
              Adelaide, SA. 2009
            </h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
