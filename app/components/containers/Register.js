import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Error from '../presentation/Error';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			username: '',
			password: '',
			rpassword: '',
			err: ''
		}
	}


	handleSubmit(e) {
		e.preventDefault();

	}


	render() {
		return (
			<div className="register-container">
				<Error error = {this.state.error} />
				<button className="back-btn btn-default" type="submit"><Link className='button-link' to='/'>Back</Link></button>
				<form className = "register-form" >
					<input className = "input input-username" name = "email" placeholder = "Email" required />
					<input className = "input" name = "username" placeholder = "Username" required />
					<input className = "input" type = "password" name = "password" placeholder = "Password" required />
					<input className = "input" type = "password" name = "rpassword" placeholder = "Re-type Password" required />
					<button className = "btn btn-default" type ="submit">Register</button>
				</form>
			</div>
			)
	}
}

export default Register;