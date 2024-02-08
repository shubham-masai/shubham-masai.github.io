import React from 'react'
import { Container, Wrapper, Title, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  return (
    <Container>
      <Wrapper id="projects">
        <Title>Projects</Title>
        <CardContainer>
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