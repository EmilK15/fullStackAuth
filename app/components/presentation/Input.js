import React, { Component } from 'react';

class Input extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				(this.props.isValid && this.props.value !== null) ?
					<div className="input-container glow-good"> 
						<input className={this.props.aClass} name={this.props.name} value={this.props.value}
							type={this.props.type} placeholder={this.props.placeholder} required />
					</div> :
					<div className="input-container glow-bad"> 
						<input className={this.props.aClass} name={this.props.name} value={this.props.value}
							type={this.props.type} placeholder={this.props.placeholder} required />
						<p className="error-text">{this.props.error}</p>
					</div>
			)
	}
}

export default Input;