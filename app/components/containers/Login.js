import React, { Component } from 'react';
import axios from 'axios';
import Error from '../presentation/Error';
import { Link, browserHistory } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username : '',
			password : '',
			err: ''
		};
	}

	onUserChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	onPwChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('/api/login', {
			username: this.state.username,
			password: this.state.password
		})
		.then((res) => {
			console.log('after logging in');
			console.log(res);
			if(res.user.isAdmin)
				browserHistory.push('/api/admin');
			else
				browserHistory.push('/api/user');
		})
		.catch((err) => {
			this.setState({
				err
			});
		});
	}

	handleSignup(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className= "landing-form">
				<Error error = {this.state.error} />
				<form className ="login-form" id ="authenticate" onSubmit={ (e) => this.handleSubmit(e)} >
					<input className = "input input-username" type = "text" name = "username"
					placeholder = "Username" required onChange={ (e) => this.onUserChange(e) }/>
					<input className = "input input-pw" type = "password" name = "password"
					placeholder = "Password" required onChange={ (e) => this.onPwChange(e) }/>
					<button className = "btn btn-default" type = "submit">Login</button>
				</form>
				<form className ="signup-form" onSubmit={ (e) => this.handleSignup(e)} >
					<button className = "btn btn-last btn-default" type = "submit">
						<Link className="button-link" to="/register">Sign-up</Link>
					</button>
				</form>
			</div>
			)
	}
}

export default Login;
