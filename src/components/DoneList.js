import React, { Component } from 'react';
import { List, Card } from 'antd';

import { Table } from 'antd';

class DoneList extends Component {

  render() {

    const columns = [
      {
        title: 'Done',
        dataIndex: 'text',
        key: 'id',
        render: text => <b>{text}</b>,
      },
      {
        title: 'Date Created',
        dataIndex: 'createdAt',
        key: 'id',
        render: text => <b>{text}</b>,
      }
    ];

    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <Table 
          columns={columns}
          dataSource={this.props.doneTodos}
          pagination={{ pageSize: 10 }}
        />
      </div>
    );
  }
}

export default DoneList;