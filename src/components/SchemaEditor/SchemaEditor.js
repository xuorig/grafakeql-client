import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/lint/lint';
import 'codemirror/keymap/sublime';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/mode';

import '../../../node_modules/graphiql/graphiql.css'
import './SchemaEditor.css';

class SchemaEditor extends Component {
  static propTypes = {
    onEdit: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.editor = null;
  }

  componentDidMount() {
    this.editor = CodeMirror(ReactDOM.findDOMNode(this), {
      value: 'type Query { name: String }',
      lineNumbers: true,
      tabSize: 2,
      mode: 'graphql',
      theme: 'graphiql',
      autoCloseBrackets: true,
      matchBrackets: true,
      showCursorWhenSelecting: true,
      foldGutter: {
        minFoldSize: 4
      },
    });

	this.editor.on('change', () => {
      this.props.onEdit(this.editor.getValue());
    });
  }

  render() {
    return (
      <div className="SchemaEditor"></div>
    );
  }
}

export default SchemaEditor;
