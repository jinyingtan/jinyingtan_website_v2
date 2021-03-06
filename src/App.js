import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ReactGA from 'react-ga';

import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css'
import './css/global.css'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Project from './Template/Project'

class App extends Component {
  constructor(props) {
    super(props);
    this.initializeReactGA();
  }

  initializeReactGA = () => {
    ReactGA.initialize('UA-110806580-1');
    ReactGA.pageview('/');
  };

  render() {

    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/:project" component={Project} />
          <Route path="/contact" component={Contact} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
