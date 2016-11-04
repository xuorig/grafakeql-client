import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    const type = this.props.type;
    const className = "message" + (type === "success" ? " message--success" : " message--error");
    return <div className={className}>{this.props.msg}</div>
  }
}

export default Message;

