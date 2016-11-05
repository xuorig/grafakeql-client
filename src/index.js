import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App';
import SchemaDefinition from './components/SchemaDefinition/SchemaDefinition';
import ApiPage from './components/ApiPage/ApiPage';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SchemaDefinition} />
      <Route path="/apis/:uuid" component={ApiPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
