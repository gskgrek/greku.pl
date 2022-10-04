import React from 'react';
import * as PropTypes from 'prop-types';

function Error404(props) {
    const {
        location: { pathname },
    } = props;

    return (
        <>
            <h1 style={{ textAlign: 'left' }}>Not Found</h1>
            <p>The requested URL {pathname} was not found on this server.</p>
        </>
    );
}

Error404.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};

export default Error404;
