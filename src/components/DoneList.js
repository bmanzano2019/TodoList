import React, { Component } from 'react';
import { List, Card } from 'antd';
class DoneList extends Component {

  render() {
    const doneTodos = this.props.doneTodos.map((todo) =>
      <Card key={todo.id}>{todo.text} </Card>);
    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <h2 id="appName">Done Items</h2>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={doneTodos}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default DoneList;