import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const FormatParagraphLeft = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
  </svg>
);
FormatParagraphLeft.propTypes = { fill: PropTypes.string };
FormatParagraphLeft.defaultProps = { fill: iconColorsMap.mainicon };

export default FormatParagraphLeft;
