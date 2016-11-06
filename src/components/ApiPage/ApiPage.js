import React, { Component } from 'react';
import hljs from 'highlight.js';
import { Link } from 'react-router';
import { curlExample, jsExample } from './examples';

import './ApiPage.css';
import '../App.css';
import '../../../node_modules/highlight.js/styles/github.css'

class ApiPage extends Component {
  componentDidMount() {
    const preTags = document.querySelectorAll('code');
    preTags.forEach(tag => { hljs.highlightBlock(tag) });
  }

  render() {
    return (
      <div className="ApiPage">
        <h1 className="App__title">You're All Set! 🚀</h1>
        <p className="ApiPage__instructions ApiPage__instructions__small">You can now use your Custom GraFakeQL Endpoint. Time to give it a go!</p>

        <div className="ApiPage__examples">
          <h3>Explore your API with <Link to={`/apis/${this.props.params.uuid}/console`}>GraphiQL</Link></h3>
          <p className="ApiPage__instructions ApiPage__instructions__small">
            <Link to={`/apis/${this.props.params.uuid}/console`}>GraphiQL</Link> is a GraphQL API Explorer.
            It allows you to view documentation, try queries, and even autocompletes them!
          </p>

          <div className="ApiPage__or"> - or - </div>

          <h3>Curl</h3>
          <pre><code className="bash">{curlExample}</code></pre>
          <div className="ApiPage__or"> - or - </div>

          <h3>JavaScript</h3>
          <pre><code className="javascript">{jsExample}</code></pre>

          <p className="ApiPage__instructions ApiPage__instructions__small center">
            Don't like your Schema ? <Link to={'/'}>Build a new one.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ApiPage;
