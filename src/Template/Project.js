import React, { Component } from 'react'
import { FaHtml5, FaCss3, FaJsSquare, FaPython } from 'react-icons/fa'

import project_details from '../project_details'
import Header from '../Components/Header';

class Project extends Component {

  render() {
    const project = this.props.match.params.project;
    const technology_icons = {
      'html': <FaHtml5 />,
      'css': <FaCss3 />,
      'javascript': <FaJsSquare />,
      'python': <FaPython />,
    };

    const Overview = ({ overview }) => {
      let descriptions = overview.split("\n");

      let description_para = descriptions.map((e, index) => {
        return (<p key={index}>{e}</p>)
      })

      return (
        <div className="overview">
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
          <a key={index} href={e[1]}>
            <span className="link-text">{e[0]}</span>
          </a>
        );
      });

      return (
        <div className="project-links">
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
        <div className="project-technologies">
          <div className="title">
            <span>Built With: </span>
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
        <section id="project_id">
          <h4>{project_details[project]["title"]}</h4>

          <Overview overview={project_details[project]["overview"]} />
          <Links links={project_details[project]["links"]} />
          <Technologies technologies={project_details[project]["technologies"]} />
        </section>
      </React.Fragment>
    )
  }
}


export default Project