import React from 'react';
import Img from 'gatsby-image';

import './pictures.css'

const PhotoGridView = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

  return (
    <>
      {
        images.map((image, i) => (
          <div className="photo-grid-img-wrapper" key={i}>
            <Img alt="House" className="photo-grid-img"
              fluid={image.fluid}/>
          </div>
        ))
      }
    </>
  );
}

export default PhotoGridView;