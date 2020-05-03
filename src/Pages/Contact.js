import React, { Component } from 'react';

import Header from '../Components/Header';

import '../css/contact.css'

class Contact extends Component {
  render() {
    const Content = () => {
      return (
        <section id="contact">
          <h2>Get In Touch</h2>
          <p>
            Feel free to chat me up.
                    </p>
          <p className="description">
            Chat me up telegram or send me an email by clicking the email button below. You can also visit me on my social media links below
                    </p>
          <div className="chat">
            <a href="http://t.me/jinyingtan" className="btn telegram-btn" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-telegram" aria-hidden="true"></i>
                            Telegram
                        </a>
            <a href="mailto:developer.tjy@gmail.com?subject=Hello%20Jin%20Ying" className="btn email-btn">
              <i className="fa fa-envelope" aria-hidden="true"></i>
                            E-mail Me
                        </a>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/developer.tjy/?hl=en" target="_blank" rel="noopener noreferrer">
              <div className="animate">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/jin-ying-tan" target="_blank" rel="noopener noreferrer">
              <div className="animate">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </a>
            <a href="https://github.com/jinyingtan" target="_blank" rel="noopener noreferrer">
              <div className="animate">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </div>
            </a>
            <a href="https://codepen.io/tjykenth/" target="_blank" rel="noopener noreferrer">
              <div className="animate">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </div>
            </a>
          </div>
        </section>
      )
    }

    return (
      <React.Fragment>
        <Header isHome={false} />
        <Content />
      </React.Fragment>
    )
  }
}

export default Contact;
