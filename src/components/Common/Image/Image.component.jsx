import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './Image.styles.scss';

const Image = ({src,classnames,width,height}) => (

  <img src={src} className={classnames} width={width} height={height}></img>
  
)

Image.propTypes = {

  src : PropTypes.string.isRequired,
  classnames : PropTypes.string,
  width : PropTypes.string,
  height : PropTypes.string

}

 
export default Image;

