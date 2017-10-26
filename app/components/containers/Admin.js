import React, { Component } from 'react';
import axios from 'axios';
import Error from '../presentation/Error';
import { Link } from 'react-router-dom';

class Admin extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      err: ''
    };
  }

  handleLogout(e) {
      axios.get('/api/logout')
        .catch((err) => {
            this.setState({
              err
            });
        });
  }

  render() {
    return (
      <div className="container">
        <div>Admin page</div>
        <Error error={this.state.err} />
        <button className="btn btn-default" onClick={(e)=>this.handleLogout(e)}>
          <Link className="button-link" to="/">Logout</Link>
        </button>
      </div>
    )
  }
}

export default Admin;
