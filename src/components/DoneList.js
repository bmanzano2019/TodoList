import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

class DoneList extends Component {
  render() {
    const doneTodos = this.props.doneTodos.map((todo) => 
    <li key={todo.id}>{todo.text} </li>);
    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <h2 id="appName">Done Items</h2>
        <ul>
          <li>{doneTodos}</li>
        </ul>
      </div>
    );
  }
}

export default DoneList;