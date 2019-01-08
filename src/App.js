import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Helmet } from "react-helmet"

import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './css/reset.css'
import './css/global.css'
import './css/fonts.css'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Project from './Template/Project'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>Jin Ying</title>

          <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />
        </Helmet>

        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio/:project" component={Project} />
            <Route path="/contact" component={Contact} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
