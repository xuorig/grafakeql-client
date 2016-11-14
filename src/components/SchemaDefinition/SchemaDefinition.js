import React, { Component } from 'react';
import SchemaEditor from '../SchemaEditor/SchemaEditor';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';

import { buildSchema } from 'graphql';
import { commitSchema } from '../../api';
import { withRouter } from 'react-router';

import './SchemaDefinition.css';

const defaultSchemaString =
`# Welcome to GrafakeQL!
#
# GrafakeQL helps you getting started quickly with a Mock GraphQL API.
#
# Type your Schema IDL into this screen.
# Once you're ready, hit that validate button and create your own GraphQL Endpoint!
#
# Have Fun!

type Query {
  myField: String
  myIntField: Int
  myObjectField: MyObject
}

type MyObject {
  # Describe fields using comments
  yolo: String
}
`;

class SchemaDefinition extends Component {
  constructor(props) {
    super(props);

    // Bind instance methods
    this.onCommitSchema = this.onCommitSchema.bind(this);
    this.onEditSchema = this.onEditSchema.bind(this);

    // State
    this.state = {
      schemaString: defaultSchemaString,
      error: null,
      loading: false,
    };
  }

  render() {
    const { error, loading } = this.state;

    let message;
    let button;

    if (error) {
      message = <Message msg={error} type="error" />
    }

    if (loading) {
      button = <Spinner />
    } else {
      button = <button className="SchemaDefinition__button" onClick={this.onCommitSchema}>Build API</button>
    }

    return (
      <div>
        <h1 className="App__title">Build your GraphQL Schema 🔨</h1>

        {message}

        <SchemaEditor
          ref={n => { this.schemaEditorComponent = n; }}
          onEdit={this.onEditSchema}
          schemaString={this.state.schemaString}
        />

        {button}
      </div>
    );
  }

  validateSchema() {
    try {
	    buildSchema(this.state.schemaString);

      this.setState({
        error: null
      });

      return true;
    } catch (err) {
      this.setState({ error: err.message });
      return false;
    }
  }

  onCommitSchema() {
    // Don't Commit Schema if it aint valid
    if (!this.validateSchema()) {
      return;
    }

    this.setState({loading: true});

    commitSchema(this.state.schemaString).then(response => {
      this.setState({loading: false});

      if (response.status === 201) {
        response.json().then(payload => {
          this.props.router.push(`/apis/${payload.id}`);
        });
      } else {
        this.setState({error: 'Something went wrong... Try again?'})
      }
    });
  }

  onEditSchema(schemaString) {
    this.setState({
      schemaString,
      error: null
    });
  }
}

export default withRouter(SchemaDefinition);
