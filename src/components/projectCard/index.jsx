import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div className="project-card">
      <Link to="/">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
      </Link>
    </div>
  )
}

export default ProjectCard
