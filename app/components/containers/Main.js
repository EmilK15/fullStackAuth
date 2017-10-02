import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register } from './';

export default () => {
	return (
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/register' component = {Register} />
		</Switch>
		)

}