import React from 'react';
import Input from './Input';
import Button from './Button';
import Loader from './Loader';

const LoginForm = ({showLoader, login}) => (
	<form>
		Username: <Input /><br />
		Password: <Input type="password" /><br />
		<Button type="submit" text="Login" onClick={login} />
		<Loader show={showLoader} />
	</form>
);

export default LoginForm;
