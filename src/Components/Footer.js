import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../css/footer.css'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <Link to="contact" className="contact">
          Get in Touch
        </Link>

        <h4>Inspired by many. Coded by Jin Ying</h4>
      </footer>
    )
  }
}

export default Footer;