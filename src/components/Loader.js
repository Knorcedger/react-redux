import React, { PropTypes } from 'react';

const Loader = ({show}) => (
	<span style={{display: show ? 'block' : 'none'}}>Loading</span>
)

Loader.propTypes = {
	show: PropTypes.bool.isRequired
};

export default Loader;
