import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, User, Admin } from './';

export default () => {
	return (
		<Switch>
			<Route exact path='/' component = {Login} />
			<Route path='/register' component = {Register} />
			<Route path='/api/user' component = {User} />
			<Route path='/api/admin' component = {Admin} />
		</Switch>
		)

}
