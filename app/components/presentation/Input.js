import React, { Component } from 'react';

class Input extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				(this.props.isValid && this.props.value !== null) ?
					<div className="input-container"> 
						<input className={this.props.aClass} name={this.props.name}
							type={this.props.type} placeholder={this.props.placeholder} required />
						<span className="correct-input glyphicon glyphicon-ok"></span>
					</div> :
					<div className="input-container"> 
						<input className={this.props.aClass} name={this.props.name} 
							type={this.props.type} placeholder={this.props.placeholder} required />
						<p className="error-text">{this.props.error}<span className="incorrect-input glyphicon glyphicon-remove"></span></p>
					</div>
			)
	}
}

export default Input;