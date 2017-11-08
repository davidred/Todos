import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => <TodoListItem key={todo.id} title={todo.title} />);

    return (
      <div>
        <ul>
          { todoItems }
        </ul>
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;