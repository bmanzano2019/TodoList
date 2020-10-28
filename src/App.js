import './App.css';
import TodoList from './components/TodoList';
import {  Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';
import PageNotFound from './components/PageNotFound';

function App() {
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

export default App;
