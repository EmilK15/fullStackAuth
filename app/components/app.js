import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(<Router routes={routes} history={hashHistory}/>, document.getElementById('root'));