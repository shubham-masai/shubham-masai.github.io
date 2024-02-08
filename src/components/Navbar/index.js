import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ResumeButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import Shubham from "../../data/Shubham-Jayswal-Resume.pdf"
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  const GoogleDriveLink = 'https://drive.google.com/file/d/1_YDtLkPVLkjXPalwZKKY0mK9nxpe4lTw/view?usp=sharing';
  const handleResumeButtonClick = () => {
    window.open(GoogleDriveLink, '_blank');
  };
  return (
    <Nav id='#nav-menu'>
      <NavbarContainer id="nav-menu">
        <NavLogo to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Shubham Jayswal</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home" className='nav-link home'>Home</NavLink>
          <NavLink href="#about" className='nav-link about'>About</NavLink>
          <NavLink href='#skills' className='nav-link skills'>Skills</NavLink>
          <NavLink href='#projects' className='nav-link projects'>Projects</NavLink>
          <NavLink href='#contact' className='nav-link contact'>Contacts</NavLink>
          <ButtonContainer id="resume-button-1" >
            <ResumeButton id="resume-link-1" className='nav-link resume' href={Shubham} target="_blank" download="Shubham-Jayswal-Resume" rel="noopener noreferrer" onClick={handleResumeButtonClick}>Resume</ResumeButton>
          </ButtonContainer>
        </NavItems>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#home" onClick={() => {
              setIsOpen(!isOpen)
            }}>Home</MobileLink>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Project</MobileLink>
            <ResumeButton id="resume-link-1" style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Shubham} target="_blank" download="Shubham-Jayswal-Resume" rel="noopener noreferrer" onClick={handleResumeButtonClick}>Resume</ResumeButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar