import React, {PropTypes} from 'react';

const Button = ({type, text, onClick}) => (
	<button type={type} onClick={onClick}>{text}</button>
)

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
	type: 'submit'
};

export default Button;
