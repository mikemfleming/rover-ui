import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const ChevronUp = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);
ChevronUp.propTypes = { fill: PropTypes.string };
ChevronUp.defaultProps = { fill: iconColorsMap.mainicon };

export default ChevronUp;
