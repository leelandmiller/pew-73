import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby';

import Container from './Container';
import "./about.css"

const imgQuery = graphql`
  {
    view:file(relativePath: {eq: "about/hills-view.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => (
  <Container style={{
    marginTop: '64px',
    marginBottom: '64px'
  }}>
    <h1 className="about-title">About This Property</h1>
    <h3 className="about-subtitle">Palomar Estates West &bull; San Marcos, Ca</h3>

    <div className="about-content">
      <p className="description">
        This is home is a beautiful triple wide 2 bedroom, 2 bath situated in a quiet area in the highly coveted Palomar Estates West 55+ community. The view of the hills from the front living room and the front porch are spectacular, and provide a breathtaking perspective of the early morning sunrises. The professionally landscaped exterior is beautiful and low maintenance. The home features dual pane windows throughought the home, with the exception of the sliding glass door. The roof was recently replaced in 2016. The washer and dryer, which are included, were purchased in 2014. The driveway has curved poles and louvers, allocating extra-wide parking space. It has been freshly re-painted with on trend colors and has composite Trex decking for steps in both the front and back entrances to the house. 
      </p>

      <div className="about-img-wrapper">
        <StaticQuery query={imgQuery}
          render={data => (
            <Img className="about-img"
              fluid={data.view.childImageSharp.fluid}/>
          )}
        />
      </div>
    </div>
  </Container>
)

export default About