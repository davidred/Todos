import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    // this.state = { title: '' };
  }

  render() {
    return(
      <form>
        <label>Title</label>
        <input type="text" placeholder="Todo"></input>
      </form>
    );
  }
}

export default TodoForm;
