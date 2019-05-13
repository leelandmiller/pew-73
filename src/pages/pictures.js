import React from 'react'
import { graphql } from 'gatsby';

import PicturesAddress from '../components/PicturesAddress'
import PhotoGridQuery from '../components/PhotoGridQuery'
import SEO from '../components/seo'

export const query = graphql`
  {
    allKeywordsJson {
      edges {
        node {
          keyword
        }
      }
    }
  }
`

const Pictures = ({ data: { allKeywordsJson } }) => {
  const keywords = allKeywordsJson.edges.map(edge => {
    return edge.node.keyword
  })

  return (
    <>
      <SEO title="1930 W San Marcos Blvd #73" keywords={keywords} />
      <div className="pictures-page">
        <PicturesAddress/>
        <PhotoGridQuery/>
      </div>
    </>
  );
}

export default Pictures