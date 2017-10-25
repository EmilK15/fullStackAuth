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
			errEmail: '',
			errUser: '',
			errPw: '',
			errMatch: '',
			errorMsg: ''
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	validateEmail(email) {
		var emailRe = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	  if(String(email).match(emailRe))
			this.setState({
				errEmail: ''
			});
		else
			this.setState({
				errEmail : 'You need an email with an @ in it.'
			});

		return String(email).match(emailRe);
	}

	validateUsername(username) {
		var userRe = /^[a-zA-Z0-9_-]{5,18}$/;
		if(String(username).match(userRe))
			this.setState({
				errUser: ''
			});
		else
			this.setState({
				errUser : 'Username must contain only letters, numbers and underscores. Must be between 5 and 18 characters'
			});

		return String(username).match(userRe);
	}

	validatePassword(pw) {
		var pwRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,20}$/;
		if(String(pw).match(pwRe))
			this.setState({
				errPw: ''
			});
			else
				this.setState({
					errPw: 'Passwords must contain at least one number, one lowercase, one uppercase letter and one special character. Passwords must be between 6 and 20 characters long.'
				});

		return String(pw).match(pwRe);
	}

	matchPw(pw, rPw) {
		for(let i=0; i < pw.length; i++)
			if(pw.charCodeAt(i) !== rPw.charCodeAt(i)) {
				this.setState({
					errMatch: 'Passwords do not match.'
				});
				return false;
			} else
					this.setState({
						errMatch: ''
					});

		return true;
	}

	handleRegister(e) {
		e.preventDefault();
		if(this.validateEmail(this.state.email) && this.validateUsername(this.state.username)
			&& this.validatePassword(this.state.password) && this.matchPw(this.state.password, this.state.rpassword)) {
				axios.post('/api/registerUser', {
						email: this.state.email,
						username: this.state.username,
						password: this.state.password,
						rpassword: this.state.rpassword
				})
				.catch((err) => {
					this.setState({
						errorMsg: err
					});
				});
		}
	}

	render() {
		return (
			<div className="register-container">
				<button className="back-btn btn-default" type="submit">
					<Link className='button-link' to='/'><span className="glyphicon glyphicon-arrow-left"></span></Link>
				</button>
				<form className = "register-form" >
					<Error error={this.state.errorMsg} />
					<input className="input" name="email" placeholder="Email" onChange={(e)=>this.handleChange(e) } />
					<Error error={this.state.errEmail} />
					<input className="input" name="username" placeholder="Username" onChange={(e)=>this.handleChange(e) } />
					<Error error={this.state.errUser} />
					<input className="input" type="password" name="password" placeholder="Password" onChange={(e)=>this.handleChange(e) } />
					<Error error={this.state.errPw} />
					<input className="input" type="password" name="rpassword" placeholder="Re-Type Password" onChange={(e)=>this.handleChange(e) } />
					<Error error={this.state.errMatch} />
					<button className = "btn btn-last btn-default" type ="submit" onClick={ (e) => this.handleRegister(e) }>Register</button>
				</form>
			</div>
			)
	}
}

export default Register;
