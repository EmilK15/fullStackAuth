import React, { Component } from 'react';
import axios from 'axios';

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
            err
        });
  }

  render() {
    return (
      <div className="container">
        <div>Admin page</div>
        <button className="btn btn-default" onClick={(e)=>this.handleLogout(e)}>Logout</button>
      </div>
    )
  }
}

export default Admin;
