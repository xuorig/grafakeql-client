import React, { Component } from 'react';
import './ApiPage.css';
import '../App.css';

class ApiPage extends Component {
  render() {
    return (
      <div className="ApiPage">
        <h1 className="App__title">You're All Set!</h1>
        <h2 className="ApiPage__instructions">
          <span className="ApiPage__instructions__verb">
            POST
          </span> https://grafakeql.io/apis/{this.props.params.uuid}
        </h2>
      </div>
    );
  }
}

export default ApiPage;
