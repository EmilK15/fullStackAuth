import React, { Component } from 'react';

class Error extends Component {

	render() {
		return (
				this.props.error ? 
					<div className = "alert alert-danger col-md-4 col-md-offset-4 fade in alert-dismissable">{this.props.error}
						<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
					</div>
				: null
			)
	}
}

export default Error;