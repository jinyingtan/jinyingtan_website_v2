import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../css/footer.css'

class Footer extends Component {
    render() {
        return (
            <section id = "footer">
                <Link to="contact" className = "contact">
                    Get in Touch
                </Link>

                <h4>Coded by Jin Ying</h4>
            </section>
        )
    }
}

export default Footer;