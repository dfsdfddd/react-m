import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./views/home/home";
import About from "./views/about/about";
import Toptic from "./views/toptic/toptic";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/about">关于</Link></li>
              <li><Link to="/toptic">主题列表</Link></li>
            </ul>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/about" component={About}></Route>
            <Route  path="/toptic" component={Toptic}></Route>
          </div>
        </Router>
      </div>
      // <div className="App">
        
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //     <Button type="primary">Primary</Button>
      //     <Button type="dashed">Dashed</Button>
      //     <Button type="dashed">Dashed</Button>
      //   </header>
      // </div>
    );
  }
}

export default App;
