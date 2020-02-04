import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCards/ProjectCard'

const Projects = ({ className, children }) => {
  return (
    <div className={`${className} flex mx-auto justify-center flex-wrap`} id="projects">
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </div>
  )
}

const StyledProjects = styled(Projects)`
  max-width: 1200px;
`

export default StyledProjects
