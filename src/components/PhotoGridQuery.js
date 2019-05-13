import React from 'react'
import { graphql, Link, StaticQuery } from "gatsby"

import PhotoGridView from './PhotoGridView';

import "./pictures.css"

const photoGridQuery = graphql`
  query {
    allFile(filter: {
      relativePath: { regex: "/home/" }
      extension: { regex: "/(jpg)/"}
    }, sort: { fields: name }) {
      edges {
        node {
          id
          name
          publicURL
          relativePath
        }
      }
    }
  }
`

const PhotoGridQuery = () => {
  return (
    <div className="photo-grid-wrapper">
      <Link className="back-btn" to="/">
        Back
      </Link>
      <div className="photo-grid">
        <StaticQuery
          query={photoGridQuery}
          render={data => <PhotoGridView data={data}/>}
        />
      </div>
    </div>
  );
}

export default PhotoGridQuery