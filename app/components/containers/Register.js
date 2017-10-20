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

	validateEmail(email) {
		var emailVal = false;
		for(let i=0; i< email.length; i++) {
			if(email.charCodeAt(i) === 64 && i !== 0 && i !== email.length) 
				emailVal = true;
		}
		if(!emailVal)
			this.setState({
				errEmail: 'You need an email with an @ in it.'
			});
		else
			this.setState({
				errEmail: ''
			});
		return emailVal;
	}

	validateUsername(username) {
		var userStatus = false;
		for(let i=0; i < username.length; i++) {
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
		else 
			this.setState({
				errUser: ''
			});
		return userStatus;
	}

	validatePassword(pw) {
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

		if(oneUpper && oneLower && oneNum)
			this.setState({
				errPw: ''
			});
		return oneUpper && oneLower && oneNum;
	}

	matchPw(pw, rPw) {
		for(let i=0; i < pw.length; i++)
			if(pw.charCodeAt(i) !== rPw.charCodeAt(i)) {
				this.setState({
					errMatch: 'Your password and confirmation password do not match.'
				})
				return false;
			}

		this.setState({
			errMatch: ''
		});
		return true;
	}

	handleRegister(e) {
		e.preventDefault();
		if(this.validateEmail(this.state.email) && this.validateUsername(this.state.username) 
			&& this.validatePassword(this.state.password) && this.matchPw(this.state.password, this.state.rpassword)) {
			console.log('valid data');
		}
	}

	render() {
		return (
			<div className="register-container">
				<Error error = {this.state.error} />
				<button className="back-btn btn-default" type="submit">
					<Link className='button-link' to='/'><span className="glyphicon glyphicon-arrow-left"></span></Link>
				</button>
				<form className = "register-form" >
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