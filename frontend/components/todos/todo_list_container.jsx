import { connect } from 'react-redux';
import TodoList from './todo_list';

// actions
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { getAllTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: getAllTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
