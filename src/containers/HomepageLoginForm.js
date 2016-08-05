import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import {showLoader, hideLoader} from '../actions';

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
					dispatch(hideLoader());
				});
			console.log('login!!');
			dispatch(showLoader())
		}
	}
}

const HomepageLoginForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);

export default HomepageLoginForm;
