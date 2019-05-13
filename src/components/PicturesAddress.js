import React from 'react'
import { useScroll, useResize } from '../hooks/useListeners'

import "./pictures.css"

const PicturesAddress = props => {
  const { pageYOffset } = useScroll();
  const { desktop } = useResize(868);
  let addressStyle = {}
  let priceStyle = {}
  let contactStyle = {}
  if (pageYOffset > 100 || !desktop) {
    addressStyle = {
      fontSize: '1.0rem',
      textAlign: 'left',
      marginBottom: '4px'
    }
    priceStyle = {
      fontSize: '1.2rem',
      textAlign: 'left'
    }
    contactStyle = {
      fontSize: '1.1rem'
    }
  } else if (pageYOffset <= 100 && desktop) {
    addressStyle = {
      fontSize: '2.00rem'
    }
    priceStyle = {
      fontSize: '2.00rem'
    }
    contactStyle = {
      fontSize: '1.5rem'
    }
  }

  const barStyle = !desktop ? {
    flexDirection: 'column',
    alignItems: 'flex-start'
  } : {}

  return (
    <div className="address-bar" style={barStyle}>
      <div className="row">
        <h1 className="address" style={addressStyle}>
          1930 W San Marcos Blvd #73, San Marcos, CA 92078
        </h1>
        <h1 className="address price" style={priceStyle}>
          $319,000
        </h1>
      </div>
      <div className="row">
        <div className="contact-info" style={contactStyle}>
          Liz Bishop &bull; <a className="phone" href="tel:+17602143454">
            760-214-3454
          </a>
        </div>
      </div>
    </div>
  );
}

export default PicturesAddress;