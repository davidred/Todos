import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor() {
    super();
    this.state = { detail: false };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleRemove() {
    const todo = Object.assign({}, this.props.todo);
    this.props.removeTodo(todo);
  }

  handleToggle(e) {
    e.preventDefault
    const { todo } = this.props;
    const newTodo = Object.assign({}, todo);
    this.toggleTodo(newTodo);
    this.props.receiveTodo(newTodo);
  }

  handleDetail(e) {
    e.preventDefault();
    if(this.state.detail) {
      this.setState({ detail: false });
    } else {
      this.setState({ detail: true });
    }
  }

  toggleTodo(todo) {
    if(todo.done) {
      todo.done = false;
    } else {
      todo.done = true;
    }

    return todo;
  }

  render() {
    const { todo } = this.props;
    const { id, title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={ todo }/>;
    }

    return(
      <div>
        <li><a onClick={this.handleDetail}>{title}</a>: { done ? "Undo" : "Done" }
          <button onClick={this.handleToggle}>Toggle</button>
          <button onClick={this.handleRemove}>Remove</button>
        </li>
        { detail }
      </div>
    );
  }
}

export default TodoListItem;
