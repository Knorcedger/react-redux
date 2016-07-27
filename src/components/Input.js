import React, { PropTypes } from 'react';

const Input = ({type, onChange}) => (
	<input type={type} onChange={onChange} />
)

Input.propTypes = {
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func
};

Input.defaultProps = {
	type: 'text'
};

export default Input;
