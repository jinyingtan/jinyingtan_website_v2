import React, { Component } from 'react';

import '../css/intro.css'

class Intro extends Component {
    render() {
        return (               
            <section id = "header-content" className = "text-center">
                <div id = "header-content-text" className = "text-center">
                    <p>Hello, I am</p>
                    <p className = "name">Jin Ying</p>
                    <p>a developer passionate in Web Development</p>
                </div>

                <div id="view-portfolio-container" className = "mt-5">
                    <span className = "view-portfolio-btn">View my Portfolio</span>
                </div>
            </section>
        )
    }
}

export default Intro;