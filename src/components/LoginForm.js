import React from 'react';
import Input from './Input';
import Button from './Button';
import Loader from './Loader';
import {connect} from 'react-redux';
import {showLoader, hideLoader} from '../actions';

const LoginFormHTML = ({showLoader, login}) => (
	<form>
		Username: <Input /><br />
		Password: <Input type="password" /><br />
		<Button type="submit" text="Login" onClick={login} />
		<Loader show={showLoader} />
	</form>
)

const mapStateToProps = (state) => {
	return {
		showLoader: state.loader.show
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (event) => {
			event.preventDefault();
			fetch('http://prometheus-be.herokuapp.com')
				.then(response => response.json())
				.then(json => {
					console.log(json);
					dispatch(hideLoader());
				})
				.catch(() => {
					console.log('no internet');
				})
			console.log('login!!');
			dispatch(showLoader())
		}
	}
}

const LoginForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginFormHTML);

export default LoginForm;
