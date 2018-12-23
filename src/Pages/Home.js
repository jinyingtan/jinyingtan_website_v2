import React, { Component } from 'react';

import Header from '../Components/Header';
import Intro from '../Components/Intro';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/Footer';

class Home extends Component {
   constructor() {
       super()

       const aboutComponent = React.createRef()
       const portfolioComponent = React.createRef()

       this.state = {
           aboutComponent: aboutComponent,
           portfolioComponent: portfolioComponent,
           refs: {aboutComponent, portfolioComponent}
       }
   }
   
    render() {
        return (
            <React.Fragment>
                <Header isHome={true} refProps = {this.state.refs}/>
                <Intro/>
                <About refProps = {this.state.aboutComponent}/>
                <Portfolio refProps = {this.state.portfolioComponent} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;
