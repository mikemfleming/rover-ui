import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const SentimentNegative = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-5c1.11 0 2.13.33 2.98.89-.15.16-.89 1-1.01 1.14-.58-.34-1.24-.53-1.97-.53s-1.39.19-1.98.52c-1-1.12-.04-.05-1.01-1.14.86-.55 1.88-.88 2.99-.88zm3.5-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
  </svg>
);
SentimentNegative.propTypes = { fill: PropTypes.string };
SentimentNegative.defaultProps = { fill: iconColorsMap.mainicon };

export default SentimentNegative;
