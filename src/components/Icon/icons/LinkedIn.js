import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const LinkedIn = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19.669 3c.688 0 1.256.511 1.324 1.165l.007.133v15.404c0 .672-.525 1.225-1.195 1.292l-.136.007H4.329a1.319 1.319 0 01-1.322-1.166L3 19.702V4.298a1.31 1.31 0 011.193-1.291L4.328 3h15.34zM8.339 9.748H5.668v8.59h2.67v-8.59zm6.797-.213c-1.298 0-2.17.712-2.526 1.388h-.036V9.748h-2.561v8.59h2.669V14.09c0-1.12.212-2.206 1.601-2.206 1.37 0 1.387 1.281 1.387 2.278v4.178h2.67v-4.712c0-2.313-.5-4.092-3.204-4.092zM7.003 5.478a1.548 1.548 0 100 3.095 1.548 1.548 0 000-3.095z"
    />
  </svg>
);

LinkedIn.propTypes = { fill: PropTypes.string };
LinkedIn.defaultProps = { fill: iconColorsMap.linkedin };

export default LinkedIn;
