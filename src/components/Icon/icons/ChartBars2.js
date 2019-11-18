import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const ChartBars2 = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);
ChartBars2.propTypes = { fill: PropTypes.string };
ChartBars2.defaultProps = { fill: iconColorsMap.mainicon };

export default ChartBars2;
