import React from 'react';
import PropTypes from 'prop-types';

import ClearIcon from './ClearIcon';

export const iconsMap = {
  clear: ClearIcon,
};

const Icon = ({ name, ...passedProps }) =>
  iconsMap[name] ? React.createElement(iconsMap[name], passedProps) : null;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;