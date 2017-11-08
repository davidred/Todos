import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { getAllTodos } from './reducers/selectors';

window.allTodos = getAllTodos;

const store = configureStore();
window.store = store;
// const newTodos = [{ id: 1, title: 'finish hw', body: 'finish your damn hw', done: false }, { id: 2, title: 'brush teeth', body: 'brush your damn teeth', done: true }]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
