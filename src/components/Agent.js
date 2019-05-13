import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import "./agent.css"

const logoQuery = graphql`
  {
    logo:file(relativePath: {eq: "aji-logo-black.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Agent = () => (
  <div className="agent-wrapper">
    <h1>Presented By</h1>
    <div className="agent-details">
      <h2>Liz Bishop</h2>
      <h3>760-214-3454</h3>
      <h5>BRE #02083842</h5>
    </div>
    <StaticQuery query={logoQuery}
      render={data => (
        <div className="logo-wrapper">
          <Img fluid={data.logo.childImageSharp.fluid}/>
        </div>
      )}
    />
  </div>
)

export default Agent