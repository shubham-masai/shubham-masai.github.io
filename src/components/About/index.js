import React from 'react'
import { AboutDiv, AboutSection, Title } from './AboutStyle';
import { Bio } from '../../data/constants';
const About = () => {
  return (
    <AboutDiv id='about' className="about section">
      <Title >About</Title>
      <AboutSection id='user-detail-intro' className="section">
        {Bio.about}
      </AboutSection>
    </AboutDiv>
  )
}
export default About;