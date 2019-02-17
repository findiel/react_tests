import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.input = React.createRef()
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(e) {
      this.setState({
        input: e.target.value
      })
    }
  
    submitMessage() {
      this.setState({
        messages: [...this.state.messages, this.state.input]
      }, function() {
        this.input.current.value = ''
        this.setState({
          input: ''
        })
      })
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} ref={this.input}/>
          <button onClick={this.submitMessage}>Add message</button>
          <ul>{this.state.messages.map(message => <li key={message}>{message}</li>)}</ul>
        </div>
      );
    }
  };

export default Todo;

