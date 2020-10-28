import './App.css';
import TodoList from './components/TodoList';
import {  Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';
import PageNotFound from './components/PageNotFound';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './api/todos';
import { initTodos } from './actions';

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
        <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/done">Done Page</Link>
            </li>
          <Switch>
            <Route path="/done" component={DoneListContainer}></Route>
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
