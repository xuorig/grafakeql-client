import React, { Component } from 'react';
import { query } from '../../api';
import hljs from 'highlight.js';
import { Link } from 'react-router';
import { curlExample, jsExample } from './examples';

import './ApiPage.css';
import '../App.css';
import '../../../node_modules/highlight.js/styles/github.css'

class ApiPage extends Component {
  constructor(props) {
    super(props);
    this.graphiqlFetcher = this.graphiqlFetcher.bind(this)
  }

  componentDidMount() {
    const preTags = document.querySelectorAll('code');
    preTags.forEach(tag => { hljs.highlightBlock(tag) });
  }

  render() {
    return (
      <div className="ApiPage">
        <h1 className="App__title">You're All Set! 🚀</h1>
        <p className="ApiPage__instructions ApiPage__instructions__small">You can now use your Custom GraFakeQL Endpoint. Try it with:</p>

        <h3>Curl</h3>
        <pre><code className="bash">{curlExample}</code></pre>
        <div className="ApiPage__or"> - or - </div>

        <h3>Javascript</h3>
        <pre><code className="javascript">{jsExample}</code></pre>
        <div className="ApiPage__or"> - or - </div>

        <h3>Explore your API with <Link to={'/graphiql'}>GraphiQL</Link></h3>
        <p className="ApiPage__instructions ApiPage__instructions__small">
          <Link to={'/graphiql'}>GraphiQL</Link> is a GraphQL API Explorer.
          It allows you to view documentation, try queries, and even autocompletes them!
        </p>
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
