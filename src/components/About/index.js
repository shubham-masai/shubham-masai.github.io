import React from 'react'
import { AboutDiv, AboutSection, Title } from './AboutStyle';
import { Bio } from '../../data/constants';
const About = () => {
  return (
    <AboutDiv id='about'>
      <Title id='about.about.section'>About</Title>
      <AboutSection id='user-detail-intro'>
        {Bio.about}
      </AboutSection>
    </AboutDiv>
  )
}
export default About;