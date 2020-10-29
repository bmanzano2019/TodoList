import React, { Component } from 'react';

import { Table } from 'antd';
import { getTodos } from '../api/todos';
import { initTodos } from '../actions';

class DoneList extends Component {

  componentDidMount() {
    getTodos().then(response => {
      initTodos(response.data);
    })
  }
  render() {
    const columns = [
      {
        title: 'Done',
        dataIndex: 'text',
        key: 'id',
        render: text => <b>{text}</b>,
      }
    ];

    return (
      <div>
        <h1 id="appName">Done List</h1>
        <div className="padding-100">
          <Table
            columns={columns}
            dataSource={this.props.doneTodos}
            pagination={{ pageSize: 10 }}
            
          />
        </div>
      </div>
    );
  }
}

export default DoneList;