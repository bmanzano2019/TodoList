import './App.css';
import TodoList from './components/TodoList';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';
import PageNotFound from './components/PageNotFound';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './api/todos';
import { initTodos } from './actions';

import { Menu } from 'antd';
import { HomeOutlined, CheckOutlined } from '@ant-design/icons';
// import * as Ant from 'antd';

class App extends Component {

  componentDidMount() {
    getTodos().then(response => {
      this.props.initTodos(response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]} theme="dark" className="todoMenu">
            <Menu.Item key="home" icon={<HomeOutlined />}><Link to="/">Todo List</Link></Menu.Item>
            <Menu.Item key="done" icon={<CheckOutlined />}><Link to="/done">Done List</Link></Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route exact path="/" component={TodoList}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
});

export default connect(null, mapDispatchToProps)(App);
