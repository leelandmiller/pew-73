import React from 'react'
import { graphql } from 'gatsby'
import smoothscroll from 'smoothscroll-polyfill';

import About from '../components/About'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Photos from '../components/Photos'
import Agent from '../components/Agent'
import Layout from '../components/layout'
import SEO from '../components/seo'

if (window !== undefined) {
  smoothscroll.polyfill()
}

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

const IndexPage = ({ data: { allKeywordsJson } }) => {
  const keywords = allKeywordsJson.edges.map(edge => {
    return edge.node.keyword
  })

  return (
    <>
      <Layout>
        <SEO title="1930 W San Marcos Blvd #73"
        keywords={keywords}
        />
        <Hero />
        <About />
        <Features />
        <Photos />
        <Agent />
      </Layout>
    </>
  );
}

export default IndexPage
