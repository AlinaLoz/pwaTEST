import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import Component1 from "./components/Component_1";
import Component2 from "./components/Component_2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <Link to={'/component1'}>component1</Link>
          <Link to={'/component2'}>component2</Link>
        </nav>
        <Switch>
          <Route exact path='/component1' component={Component1}/>
          <Route exact path='/component2' component={Component2}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
