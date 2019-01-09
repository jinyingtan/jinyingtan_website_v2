import React, { Component } from 'react';
import { FaHtml5, FaCss3, FaJsSquare, FaPython, FaJava } from 'react-icons/fa'

import '../css/about.css'

import profile_img from '../images/profile-img.jpg';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refProps: this.props.refProps
    }
  }

  render() {
    const toolbox = [<FaHtml5/>, <FaCss3/>, <FaJsSquare/>, <FaJava/>, <FaPython/>];

    const MyToolBox = () => {
      let toolbox_div = toolbox.map((e, index) => {
        return (
          <span className="tool" key={index}>{e}</span>
        )
      })
      
      return (
        <div className="toolbox-details">
          {toolbox_div}
        </div>
      )
    }

    return (
      <section id="about" ref={this.state.refProps}>
        <div id="about-header" className="text-center">
          <h3>About Me</h3>

          <div className="mt-5">
            <img src={profile_img} className="profile-picture" alt="Profile Picture" />
            <h4 className="mt-3">Jin Ying</h4>
          </div>
        </div>

        <div id="about-content" className="mt-4">
          <article className="description">
            Every website has a story of their own. They tell it through their own features and aesthetic design presented to its users. A user who enters the website look through the story of the website and decides whether the story has the potential to add value to them.
            <br /><br />
            My goal as a web developer is to bring out the aesthetic design of any website and highlight the features of the website to its users.
            <br /><br />
            I have graduated from Singapore Polytechnic with a Diploma in Computer Engineering (2012 – 2015). It is through these 3 years in my polytechnic education that I found my love for web developer. What I like about web development is that I feel that it is amazing that having just a simple website it can convey its message and provide values through to its users throughout the world.
            <br /><br />
            I’m currently pursuing a Bachelor in Computer Science at the National University of Singapore. I am currently a Year 2 student there and is specializing in Software Engineering and Database Management.
            During my free time, I continue to learn more about software development and work on my own pet projects.
            <br /><br />
            <a href="mailto:developer.tjy@gmail.com?subject=Hello%20Jin%20Ying">Chat me up </a> if you would like to talk to me about any areas web development or would like to me to help you convey your story through your website.
          </article>

          <div className="my-toolbox">
            <h4>My Toolbox</h4>

            <MyToolBox />
          </div>
        </div>

      </section>
    )
  }
}

export default About;