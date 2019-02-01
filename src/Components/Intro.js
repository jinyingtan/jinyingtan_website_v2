import React, { Component } from 'react';

import '../css/intro.css'

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refProps: this.props.refProps,
      portfolioRef: this.props.portfolioRef
    }
  }

  scrollToPortfolio = () => {
    window.scrollTo({
      top: this.state.portfolioRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <section id="header-content" className="text-center" ref={this.state.refProps}>
        <div id="header-content-text" className="text-center">
          <p>Hello, I am</p>
          <h1 className="name">Jin Ying</h1>
          <p>a developer passionate in Web Development</p>
        </div>

        <div id="view-portfolio-container" className="mt-5">
          <span className="view-portfolio-btn" onClick={this.scrollToPortfolio}>View my Portfolio</span>
        </div>
      </section>
    )
  }
}

export default Intro;