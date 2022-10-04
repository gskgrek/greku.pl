import React from 'react';
import * as PropTypes from 'prop-types';

import * as css from './icon.module.scss';

const icon = ({ className, type }) => <div className={[className, css.icon, css[`icon${type.charAt(0).toUpperCase()}${type.slice(1)}`]].join(' ')} />;

icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};
icon.defaultProps = {
    className: '',
};

export default icon;
