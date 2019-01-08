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
        const introComponent = React.createRef()

        this.state = {
            aboutComponent: aboutComponent,
            portfolioComponent: portfolioComponent,
            introComponent: introComponent,
            refs: { aboutComponent, portfolioComponent }
        }
    }

    componentDidMount() {
        let component = window.location.hash;

        switch (component) {
            case "#about":
                this.scrollToDiv(this.state.aboutComponent)
                break;
            case "#portfolio":
                this.scrollToDiv(this.state.portfolioComponent)
                break;
            case "":
                break;
            default:
                this.scrollToDiv(this.state.introComponent)
        }
    }

    scrollToDiv = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header isHome={true} contentRefs={this.state.refs} />
                <Intro refProps={this.state.introComponent} portfolioRef={this.state.portfolioComponent} />
                <About refProps={this.state.aboutComponent} />
                <Portfolio refProps={this.state.portfolioComponent} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;
