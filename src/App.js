import React, { Component } from 'react';
import SchemaEditor from './SchemaEditor/SchemaEditor';
import Message from './Message/Message';
import { buildSchema } from 'graphql';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Bind instance methods
    this.onValidateSchema = this.onValidateSchema.bind(this);
    this.onEditSchema = this.onEditSchema.bind(this);

    // State
    this.state = {
      parsedSchema: null,
      schemaString: '',
      error: null
    };
  }

  render() {
    const { parsedSchema, error } = this.state;

    let message;
    let button;

    if (parsedSchema) {
      message = <Message msg="Schema LGTM! Hit that big button again to create your API." type="success" />
    } else if (error) {
      message = <Message msg={error} type="error" />
    }

    if (parsedSchema) {
	  button = (
        <button className="App__button" onClick={this.onPersistSchema}>Create API From Schema</button>
      );
    } else {
	  button = (
        <button className="App__button" onClick={this.onValidateSchema}>Validate Schema</button>
      );
    }

    return (
      <div className="App">
        <h1 className="App__title">1. Build your Schema</h1>

        {message}

        <SchemaEditor
          ref={n => { this.schemaEditorComponent = n; }}
          onEdit={this.onEditSchema}
        />

        {button}
      </div>
    );
  }

  onValidateSchema() {
    try {
	  const parsedSchema = buildSchema(this.state.schemaString);
      this.setState({
        parsedSchema,
        error: null
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  onEditSchema(schemaString) {
    this.setState({
      schemaString,
      parsedSchema: null,
      error: null
    });
  }
}

export default App;
