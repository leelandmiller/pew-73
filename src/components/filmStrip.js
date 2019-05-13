import React, { Component } from 'react';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { camera } from '@fortawesome/free-solid-svg-icons';
import { faCamera, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import GradientOverlay from './gradientOverlay';

import './filmStrip.css'

class ImageFilmStrip extends Component {
  state = {
    images: this.props.data.allFile.edges.map(({ node }) => node)
  }

  arrowClick = direction => () => {
    const filmStrip = document.querySelector('.film-strip');
    const width = this.getImageWidth();
    const { scrollLeft } = filmStrip;

    if (direction === 'left' && filmStrip) {
      // move left
      filmStrip.scrollTo({
        left: scrollLeft - width,
        behavior: 'smooth'
      });
      // filmStrip.scrollLeft -= width;
    } else if (direction === 'right' && filmStrip) {
      // move right
      filmStrip.scrollTo({
        left: scrollLeft + width,
        behavior: 'smooth'
      });
      // filmStrip.scrollLeft += width;
    }
  }

  getImageWidth = () => {
    const img = document.querySelector('.film-strip-img');
    return img.offsetWidth;
  }

  render() {
    const { images } = this.state;

    return (
      <div className="film-strip-wrapper">
        <div className="film-strip-left-side">
          <FontAwesomeIcon onClick={this.arrowClick('left')}
            className="film-strip-left-arrow"
            icon={faAngleLeft}
          />
          <GradientOverlay side="left" />
        </div>
        <div className="film-strip-right-side">
          <FontAwesomeIcon onClick={this.arrowClick('right')}
            className="film-strip-right-arrow"
            icon={faAngleRight}
          />
          <GradientOverlay side="right" />
        </div>
        <Link className="view-all-imgs-link" to="/pictures">
          <div>
            <FontAwesomeIcon className="camera-ic"
              onClick={this.arrowClick('right')}
              icon={faCamera}
            />
            View all
          </div>
        </Link>
        <div className="film-strip">
          {
            images.map((img, i) => {
              return (
                <img alt="House" className="film-strip-img"
                  key={i} src={img.publicURL} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ImageFilmStrip;