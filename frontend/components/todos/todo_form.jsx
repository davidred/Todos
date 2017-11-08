import React from 'react';
import { uniqueId } from '../../utils/utilities';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { title: "", body: "", done: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return(
      event => this.setState({[key] : event.currentTarget.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "", body: "", done: false
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="hidden" value={this.id}/>
        <input type="text" onChange={this.handleInput('title')} placeholder="Wash Car" value={this.state.title}/>
        <label>Body</label>
        <input type="text" onChange={this.handleInput('body')} placeholder="Go to the car wash" value={this.state.body}/>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
