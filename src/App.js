import './App.css';
import TodoList from './components/TodoList';
import {  Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';
import PageNotFound from './components/PageNotFound';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './api/todos';
import { initTodos } from './actions';

import { Menu } from 'antd';
// import * as Ant from 'antd';

class App extends Component {

  componentDidMount() {
    getTodos().then(response => {
      console.log(response);
      this.props.initTodos(response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <BrowserRouter>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home"><Link to="/">Home Page</Link></Menu.Item>
            <Menu.Item key="done"><Link to="/done">Done Page</Link></Menu.Item>
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
