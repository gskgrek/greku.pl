import React from 'react';
import PropTypes from 'prop-types';

import css from './icon.module.scss';

const icon = ({ className, type }) => {
    return <div className={[className, css.icon, css['icon' + type.charAt(0).toUpperCase() + type.slice(1)]].join(' ')} />;
};

icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};
icon.defaultProps = {
    className: '',
};

export default icon;