import React from 'react';
import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import {showLoader, hideLoader} from '../actions';

let HomepageLoginForm = ({showLoader, login}) => (
	<LoginForm showLoader={showLoader} onSubmit={login} />
);

const mapStateToProps = (state) => {
	// console.log('mapStateToProps');
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
					dispatch(hideLoader());
				});
			console.log('login!!');
			dispatch(showLoader());
		}
	}
}

HomepageLoginForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomepageLoginForm);

export default HomepageLoginForm;
