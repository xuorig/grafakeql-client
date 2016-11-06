import React, { Component } from 'react';
import GraphiQL from 'graphiql'

import { query } from '../../api';

import './Console.css';

class Console extends Component {
  constructor(props) {
    super(props);
    this.fetcher = this.fetcher.bind(this);
  }

  render() {
    return (
      <div className="Console">
        <GraphiQL fetcher={this.fetcher}>
          <GraphiQL.Logo>
            GraFakeQL 🍻
          </GraphiQL.Logo>

          // TODO: Make this a component
          <GraphiQL.Toolbar>
            <select>
              <option>Lorem Ipsum</option>
              <option>Chuck Norris</option>
              <option>StarWars</option>
            </select>
          </GraphiQL.Toolbar>

        </GraphiQL>
      </div>
    );
  }

  fetcher(graphqlParams) {
    return query(
      this.props.params.uuid,
      graphqlParams.query,
      graphqlParams.variables
    ).then(response => {
      return response.json();
    });
  }
}

export default Console;
