import React from 'react';
import PropTypes from 'prop-types';
import './Image.styles.scss';

const Image = ({src,classnames,width,height , alt}) => (

  <img src={src} className={classnames} width={width} height={height} alt={alt}></img>
  
)

Image.propTypes = {

  src : PropTypes.string.isRequired,
  classnames : PropTypes.string,
  width : PropTypes.string,
  height : PropTypes.string,
  alt : PropTypes.string

}

 
export default Image;

