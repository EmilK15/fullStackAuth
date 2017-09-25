import React, { Component } from 'react';

class Login extends Component {

	render() {
		return (
			<div>
				<form className ='login-form' id ='authenticate'>
					<input className = "input" type = "text" name = "username" placeholder = "Username" required />
					<input className = "input" type = "password" name = "password" placeholder = "Password" required />
					<button className = "btn btn-default" type = "submit">Login</button>
				</form>

			</div>
			)
	}
}

export default Login;