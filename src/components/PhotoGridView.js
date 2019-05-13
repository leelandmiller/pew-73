import React from 'react';

import './pictures.css'

const PhotoGridView = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node)

  return (
    <div>
      {
        images.map((image, i) => (
          <img alt="House" className="photo-grid-img"
            key={i} src={image.publicURL} />
        ))
      }
    </div>
  );
}

export default PhotoGridView;