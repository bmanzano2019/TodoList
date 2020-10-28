import React, { Component } from 'react';
import { List, Card } from 'antd';

class DoneList extends Component {
  render() {
    const doneTodos = this.props.doneTodos.map((todo) => 
    <li key={todo.id}>{todo.text} </li>);
    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <h2 id="appName">Done Items</h2>
          {doneTodos}
      </div>
    );
  }
}

export default DoneList;