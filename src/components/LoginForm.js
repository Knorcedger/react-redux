import React from 'react';
import Input from './Input';
import Button from './Button';

const login = (event) => {
	event.preventDefault();
	console.log('login!!');
}

const LoginForm = () => (
	<form>
		Username: <Input /><br />
		Password: <Input type="password" /><br />
		<Button type="submit" text="Login" onClick={login} />
	</form>
)

export default LoginForm;
