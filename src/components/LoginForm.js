import React, { PropTypes } from 'react';
import Input from './Input';
import Button from './Button';
import Loader from './Loader';

const LoginForm = ({showLoader, onSubmit}) => (
	<form>
		Username: <Input /><br />
		Password: <Input type="password" /><br />
		<Button type="submit" text="Login" onClick={onSubmit} />
		<Loader show={showLoader} />
	</form>
);

LoginForm.propTypes = {
	showLoader: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default LoginForm;
