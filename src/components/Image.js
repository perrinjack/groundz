import React from 'react';

const Image = ({ url, title , description}) => (
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="card">
      <img className="card-img-top" src={url} />
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-right font-italic">{title}</h6>
        {description}
      </div>
    </div>
  </div>
);

export default Image;
