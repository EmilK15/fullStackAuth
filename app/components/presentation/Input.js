import React, { Component } from 'react';
import Error from './Error';

class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errMsg : ''
		}
	}

	handleChange(e) {
		(e) => this.props.onChange(e);
		if(!e.target.value)
			this.setState({
				errMsg: ''
			});
		else
			if((e) => this.props.validation(e.target.value))
				this.setState({
						errMsg : this.props.errorMsg
				});
			else
				this.setState({
					errMsg: ''
				});

	}

	render() {
		return (
				(!this.state.errMsg && this.props.value !== null) ?
					<div className="input-container glow-good">
						<input className={this.props.aClass} onChange={(e) => this.handleChange(e)} name={this.props.name} value={this.props.value}
							type={this.props.type} placeholder={this.props.placeholder} required />
					</div> :
					<div className="input-container glow-bad">
						<input className={this.props.aClass} onChange={(e) => this.handleChange(e)} name={this.props.name} value={this.props.value}
							type={this.props.type} placeholder={this.props.placeholder} required />
						<Error error={this.state.errMsg}></Error>
					</div>
			)
	}
}

export default Input;
