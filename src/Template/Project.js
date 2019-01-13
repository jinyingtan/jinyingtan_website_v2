import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { FaHtml5, FaCss3, FaJsSquare, FaPython, FaTelegram, FaReact } from 'react-icons/fa'

import project_details from '../project_details'
import Header from '../Components/Header'
import '../css/project_details.css'

class Project extends Component {

  render() {
    const project = this.props.match.params.project;
    const technology_icons = {
      'html': <FaHtml5 />,
      'css': <FaCss3 />,
      'javascript': <FaJsSquare />,
      'python': <FaPython />,
      'telegram': <FaTelegram />,
      'react native': <FaReact/>, 
    };

    const Overview = ({ overview }) => {
      let descriptions = overview.split("\n");

      let description_para = descriptions.map((e, index) => {
        return (<p>{ReactHtmlParser(e)}</p>)
      })

      return (
        <div className="mb-5 project-overview">
          <div className="title">
            <span>Project Overview: </span>
          </div>

          <div className="overview-description">
            {description_para}
          </div>
        </div>
      )
    }

    const Links = ({ links }) => {
      let links_arr = Object.entries(links);

      let links_div = links_arr.map((e, index) => {
        return (
          <a key={index} href={e[1]} target="_blank" rel="noopener noreferrer">
            <span className="link-text">{e[0]}</span>
          </a>
        );
      });

      return (
        <div className="mb-5 project-links">
          <div className="title">
            <span>View project at: </span>
          </div>

          <div className="links-link">
            {links_div}
          </div>

        </div>
      )
    }

    const Technologies = ({ technologies }) => {
      let icons = technologies.map((e, index) => {
        let technology = e.toLowerCase()

        return (<span key={index} className="tech-icon">{technology_icons[technology]}</span>);
      })

      return (
        <div className="mb-5 project-technologies">
          <div className="title">
            <span>Technologies Used: </span>
          </div>

          <div className="tech-icons">
            {icons}
          </div>
        </div>
      )
    }

    return (
      <React.Fragment>
        <Header isHome={false} />
        <section id="project">
          <div className="project-title">
            <h3>{project_details[project]["title"]}</h3>
            <p>{project_details[project]["tagline"]}</p>
          </div>

          <div className="project-details">
            <Overview overview={project_details[project]["overview"]} />
            <Links links={project_details[project]["links"]} />
            <Technologies technologies={project_details[project]["technologies"]} />
          </div>
        </section>
      </React.Fragment>
    )
  }
}


export default Project