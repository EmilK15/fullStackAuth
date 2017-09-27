import React, { Component } from 'react';

class Register extends Component {
	render() {
		return (
			<div className="register-container">
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