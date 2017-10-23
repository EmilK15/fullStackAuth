import React, { Component } from 'react';
import axios from 'axios';
import Error from '../presentation/Error';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username : '',
			password : '',
			err: ''
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('/api/login', {
			username,
			password
		})
		.then(function(res) {
			console.log('logged in');
		})
		.catch(function(err) {
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
			<div className= 'landing-form'>
				<Error error = {this.state.error} />
				<form className ='login-form' id ='authenticate' onSubmit={ (e) => this.handleSubmit(e)} >
					<input className = "input input-username" type = "text" name = "username"
					placeholder = "Username" required onChange={ (e) => this.handleChange(e) }/>
					<input className = "input input-pw" type = "password" name = "password"
					placeholder = "Password" required onChange={ (e) => this.handleChange(e) }/>
					<button className = "btn btn-default" type = "submit">Login</button>
				</form>
				<form className ='signup-form' onSubmit={ (e) => this.handleSignup(e)} >
					<button className = "btn btn-last btn-default" type = "submit">
						<Link className='button-link' to='/register'>Sign-up</Link></button>
				</form>
			</div>
			)
	}
}

export default Login;
