import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../css/header.css'

import logo from '../images/logo.svg';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refs: this.props.contentRefs
        }
    }

    scrollToDiv = (ref) => {        
        window.scrollTo({
            top: ref.current.offsetTop, 
            behavior: "smooth"
        })
    }

    navbarToggle = () => {
        const nav = this.navRef;

        if (nav.style.display === "") {
            nav.style.display = "block"
        } else {
            nav.style.display = ""
        }
    }

    render() {        
        const HeaderLinks = (props) => {
            if (this.props.isHome) {
                return (
                    <div className = "nav-link" onClick={() => this.scrollToDiv(props.refProps)}>{props.value}</div>
                )
            } else {
                return (
                    <Link className = "nav-link" to = {"/#" + props.value.toLowerCase()}>
                        {props.value}
                    </Link>
                ) 
            }
        }

        const HomeLink = (props) => {
            if (!this.props.isHome) {
                return (
                    <Link className = "nav-link" to = {"/"}>
                        Home
                    </Link>
                )
            } else {
                return (
                    ""
                )
            }
        }

        return (
            <header className = "navigation clearfix">
                <div className = "logo-container">
                    <Link to = "/">
                        <div className = "logo-img">
                            <img src = {logo} alt = "Jin Ying"/>
                        </div>

                        <div className = "logo-info">
                            <p className = "logo-name">Jin Ying Tan</p>
                            <p className = "logo-role">Developer</p>
                        </div>
                    </Link>
                </div>

                <nav className="navbar navbar-expand-sm navbar-dark">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#nav-list" aria-controls="nav-list"
                    aria-expanded="false" aria-label="Toggle navigation" onClick={this.navbarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav-list" ref = {(nav) => {this.navRef = nav}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <HomeLink />
                            </li>
                            <li className="nav-item">
                                <HeaderLinks 
                                    value = "About"
                                    refProps = {(this.state.refs) ? this.state.refs.aboutComponent : ""}
                                />
                            </li>
                            <li className="nav-item">
                                <HeaderLinks 
                                    value = "Portfolio"
                                    refProps = {(this.state.refs) ? this.state.refs.portfolioComponent : ""}
                                />
                            </li>
                            <li className="nav-item">
                                <Link to = "/contact">
                                    <span className = "contact text-center">Get in Touch</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
