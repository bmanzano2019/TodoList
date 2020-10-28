import './App.css';
import TodoList from './components/TodoList';
import {HashRouter,Route,Link,Switch, BrowserRouter} from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/done">Done Page</Link>
        </li>
      </ul>
        <Route exact path="/" component={TodoList}></Route>
        <Route path="/done" component={DoneListContainer}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
