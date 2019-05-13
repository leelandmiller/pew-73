import React from 'react';
import "./container.css"

export default props => (
  <div className="container" style={{...props.style}}>
    {props.children}
  </div>
)