import React, { Component } from 'react';
import { Login, Register } from './'
import Navigationbar from './Navigationbar'

class Landingpage extends Component {
	render() {
		return(
			<div className='container'>
				<Navigationbar />
			</div>
			)
	}
}

export default Landingpage;