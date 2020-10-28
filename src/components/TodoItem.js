import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changeStatus } from '../api/todos';

class TodoItem extends Component {

  render() {

    const todoIsDone = this.props.todo.done;

    const onClick = () => {
      changeStatus(this.props.todo.id, todoIsDone).then(response => {
        this.props.changeStatus(this.props.todo.id);
      });

      if (this.props.todo.done) {
        toast.error(this.props.todo.text + " is marked as unfinished.", {
          autoClose: 1500,
          closeOnClick: true
        });
      } else {
        toast.success(this.props.todo.text + " is marked as finished.", {
          autoClose: 1500,
          closeOnClick: true
        });
      }
    }

    const onDelete = () => {
      this.props.deleteTodo(this.props.todo.id);
      toast.success("Successfully removed " + this.props.todo.text + ".", {
        autoClose: 1500,
        closeOnClick: true
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
          <span className="col-8" onClick={onDelete}><span id="deleteIcon">X</span></span>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default TodoItem;