import React from 'react';
import { graphql, StaticQuery } from "gatsby"

import FilmStrip from '../components/filmStrip'

import "./photos.css"

const filmStripQuery = graphql`
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

const Photos = () => (
  <div className="photos-wrapper">
    <h1>Photos</h1>
    <StaticQuery
      query={filmStripQuery}
      render={data => <FilmStrip data={data} />}
    />
  </div>
)
export default Photos