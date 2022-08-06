import React from 'react'
import { allProjects } from '../data'
import ProjectCard from '../components/projectCard'

function HomePage() {
  return (
    <div>
      {allProjects.map((project, index) => (
        <ProjectCard key={index} project={project}/>
      ))}
    </div>
  )
}

export default HomePage
