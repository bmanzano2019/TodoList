import { notification } from 'antd';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { addTodos } from '../api/todos';

class TodoGenerator extends Component {

  isTodoExist = (text) => {
    const todos = this.props.todos.filter(todo => todo.text === text);
    return todos.length > 0;
  }

  isTodoEmpty = (text) => {
    return text === "";
  }

  onSubmit = (event) => {
    event.preventDefault();
    const text = event.target.todoInput.value;
    if (this.isTodoEmpty(text)) {
      notification.error({
        message: 'Empty Input!',
        duration : 1,
      });
      return;
    }
    if (this.isTodoExist(text)) {
      notification.error({
        message: text + " already exist!",
        duration : 1,
      });
      return;
    }

    addTodos(text).then(response => {
      this.props.addTodo(response.data);
      notification.success({
        message: text + " has been added!",
        duration : 1,
      });
    })
    event.target.todoInput.value = "";
  }

  render() {
    return (
      <div id="todoGenerator">
        <form onSubmit={this.onSubmit}>
          <span>
            <input type="text" name="todoInput" id="todoInput" placeholder="add something..." />
            <input type="submit" value="Add Item" id="todoSubmit" />
          </span>
        </form>
      </div>
    );
  }
}

export default TodoGenerator;