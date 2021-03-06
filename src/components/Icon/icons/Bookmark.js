import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Bookmark = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z" />
  </svg>
);
Bookmark.propTypes = { fill: PropTypes.string };
Bookmark.defaultProps = { fill: iconColorsMap.mainicon };

export default Bookmark;
