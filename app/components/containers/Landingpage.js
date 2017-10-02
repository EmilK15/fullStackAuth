import React, { Component } from 'react';
import { Login, Register } from './';
import Navigationbar from './Navigationbar'
import Main from './Main';

class Landingpage extends Component {

	render() {
		return(
			<div className='container'>
				<Navigationbar />
				<Main />
			</div>
			)
	}
}

export default Landingpage;