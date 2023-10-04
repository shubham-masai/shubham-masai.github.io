import React from 'react'
import { Container, Wrapper, Title,CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper id="projects">
        <Title>Projects</Title>
        <CardContainer className='project-card'>
          {projects
            .map((item) => (
              <ProjectCard key={item.id} {...item}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects