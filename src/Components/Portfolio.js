import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../css/portfolio.css'
import forex_bot_cover from '../images/forex_bot_cover.png';
import portfolio_simulation_cover from '../images/portfolio_simulation_cover.jpg'
import foodbites_business_cover from '../images/foodbites_business_cover.png'

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refProps: this.props.refProps
        }
    }

    render() {
        const ProjectCard = (props) => {
            const url_params = props.title.toLowerCase().split(" ").join("-")
            const url = "portfolio/" + url_params
            return (
                <div className="col-md-5 col-sm-12 project">
                    <Link to={url} className="img-container">
                        <img src={props.image_path} alt={props.title} />
                    </Link>

                    <div className="project-content mt-3 text-center">
                        <div className="title-anchor">
                            <h4>{props.title}</h4>
                        </div>

                        <div className="project-description">
                            <p>{props.top_description}</p>
                            <p>{props.bottom_description}</p>
                        </div>

                        <div className="mt-3">
                            <Link to={url}>
                                <span className="view-project">View Project</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <section id="portfolio" ref={this.state.refProps}>
                <div id="portfolio-header" className="text-center">
                    <h3>My Portfolio</h3>
                </div>

                <div className="row mt-4">
                    <ProjectCard
                        title="FOREX Updates Bot"
                        image_path={forex_bot_cover}
                        top_description="A Telegram Bot to receive "
                        bottom_description="Economic News Updates in real time"
                    />

                    <ProjectCard
                        title="Portfolio Simulation"
                        image_path={portfolio_simulation_cover}
                        top_description="Simulate whether a trader "
                        bottom_description="will be profitable in the long run."
                    />

                    <ProjectCard
                        title="FoodBites Business"
                        image_path={foodbites_business_cover}
                        top_description="An App to help food businesses"
                        bottom_description="reduce their food wastage."
                    />
                </div>
            </section>
        )
    }
}

export default Portfolio;