import { notification } from 'antd';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { changeStatus, deleteTodo } from '../api/todos';
import { DeleteFilled } from '@ant-design/icons';
class TodoItem extends Component {

  render() {

    const todoIsDone = this.props.todo.done;

    const onClick = () => {
      changeStatus(this.props.todo.id, todoIsDone).then(response => {
        this.props.changeStatus(this.props.todo.id);
      });

      if (this.props.todo.done) {
        notification.error({
          message: this.props.todo.text + " is marked as unfinished.",
          duration: 1,
        });
      } else {
        notification.success({
          message: this.props.todo.text + " is marked as finished.",
          duration: 1,
        });
      }
    }

    const onDelete = () => {

      deleteTodo(this.props.todo.id).then(response => {
        this.props.deleteTodo(this.props.todo.id);
      })
      notification.success({
        message: "Successfully removed " + this.props.todo.text + ".",
        duration: 1,
      });
    }


    const style = {
      textDecoration: todoIsDone ? 'line-through' : '',
      color: todoIsDone ? 'gray' : 'white'
    }
    return (
      <div>
        <div id="todoItem">
          <span style={style} className="col-92" onClick={onClick}>{this.props.todo.text}</span>
          <span className="col-8" onClick={onDelete}><span id="deleteIcon"><DeleteFilled /> </span></span>
        </div>
      </div>
    );
  }
}

export default TodoItem;