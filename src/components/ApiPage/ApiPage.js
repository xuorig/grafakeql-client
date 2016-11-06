import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import { query } from '../../api';

import './ApiPage.css';
import '../App.css';

class ApiPage extends Component {
  constructor(props) {
    super(props);
    this.graphiqlFetcher = this.graphiqlFetcher.bind(this)
  }

  render() {
    return (
      <div className="ApiPage">
        <h1 className="App__title">You're All Set!</h1>
        <p className="ApiPage__instructions ApiPage__instructions__small">Try your Fake API at:</p>

        <p className="ApiPage__instructions">
          <span className="ApiPage__instructions__verb">
            POST
          </span> https://grafakeql.io/apis/{this.props.params.uuid}/query
        </p>

        <div className="ApiPage__or"> - or - </div>

        <div className="ApiPage__graphiql-container">
          <GraphiQL fetcher={this.graphiqlFetcher}/>
        </div>
      </div>
    );
  }

  graphiqlFetcher(graphqlParams) {
    return query(
      this.props.params.uuid,
      graphqlParams.query,
      graphqlParams.variables
    ).then(response => {
      return response.json();
    });
  }
}

export default ApiPage;
