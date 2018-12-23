import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './css/global.css'
import './css/fonts.css';

import Home from './Pages/Home';

class App extends Component {
  render() {

    return (
      <Router>
          <Route exact path = "/" component = {Home} />
      </Router>
    );
  }
}

export default App;
