import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Error from '../presentation/Error';
import { Input } from '../presentation/';

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
			errMatch: ''
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name] : e
		});
	}

	validateEmail() {
		var email = this.state.email;

		for(let i=0; i< email.length; i++) {
			if(email.charCodeAt(i) === 64 && (i !== 0 && i !== email.length))
				return true;
		}
		this.setState({
			errEmail: 'You need an email with an @ in it.'
		});
		return false;
	}


	validateUsername() {
		var userStatus = false;
		let username = this.state.username;
		for(let i=0; i< username.length; i++) {
			if(username.charCodeAt(i) < 48 ||
				(username.charCodeAt(i) > 57 &&
					username.charCodeAt(i) < 65) ||
				(username.charCodeAt(i) > 90 &&
					username.charCodeAt(i) < 97) ||
				username.charCodeAt(i) > 122) {
				userStatus = false;
			}
		}
		if(!userStatus)
			this.setState({
				errUser: 'Username must contain only letters, numbers and underscores.'
			});
		return userStatus;
	}

	validatePassword() {
		var pw = this.state.password;
		var oneUpper = false;
		var oneLower = false;
		var oneNum = false;

		if(pw.length > 6 && pw.length < 20) {
			for(let i=0; i< pw.length; i++) {
				if(pw.charCodeAt(i) < 123 && pw.charCodeAt(i) > 96)
					oneLower = true;
				if(pw.charCodeAt(i) < 96 && pw.charCodeAt(i) > 64)
					oneUpper = true;
				if(pw.charCodeAt(i) > 47 && pw.charCodeAt(i) < 58)
					oneNum = true;
			}
		}
		if(!(oneUpper && oneLower && oneNum))
			this.setState({
				errPw: 'Passwords must contain at least one number, one lowercase and one uppercase letter. Passwords must be between 6 and 20 characters long.'
			});
		return oneUpper && oneLower && oneNum;
	}

	matchPw() {
		var pw = this.state.password;
		var rPw = this.state.rpassword;

		for(let i=0; i < pw.length; i++)
			if(pw.charCodeAt(i) !== rPw.charCodeAt(i))
				return false;

		this.setState({
			errMatch: 'Your password and confirmation do not match.'
		});
		return true;
	}

	handleRegister(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="register-container">
				<Error error = {this.state.error} />
				<button className="back-btn btn-default" type="submit"><Link className='button-link' to='/'><span className="glyphicon glyphicon-arrow-left"></span></Link></button>
				<form className = "register-form" >
					<Input aClass="input" name="email" placeholder = "Email" error={this.state.errEmail}
						onChange={ (e) => this.handleChange(e) } isValid = {() => this.validateEmail()} />
					}
					<Input aClass="input" name="username" placeholder="Username" error={this.state.errUser}
						onChange={ (e) => this.handleChange(e) } isValid = {() => this.validateUsername()} />
					}
					<Input aClass="input" type="password" name="password" placeholder="Password" error={this.state.errPw}
						onChange={ (e) => this.handleChange(e) } isValid = {() => this.validatePassword() } />
					}
					<Input aClass="input" type="password" name="rpassword" placeholder="Re-Type Password" error={this.state.errMatch}
						onChange={ (e) => this.handleChange(e) } isValid = {() => this.matchPw() } />
					}
					<button className = "btn btn-last btn-default" type ="submit" onClick={ (e) => this.handleRegister(e) }>Register</button>
				</form>
			</div>
			)
	}
}

export default Register;