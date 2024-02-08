import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, ButtonContainer } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import Shubham from "../../data/Shubham-Jayswal-Resume.pdf"

const HeroSection = () => {
    const GoogleDriveLink = 'https://drive.google.com/file/d/1_YDtLkPVLkjXPalwZKKY0mK9nxpe4lTw/view?usp=sharing';

    const handleResumeButtonClick = () => {
        window.open(GoogleDriveLink, '_blank');
    };
    return (
        <div>
            <HeroContainer >
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer id="home">
                    <HeroLeftContainer id="Left">
                        <Title id='user-detail-name'>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>

                        <ResumeButton id="resume-button-2" href={Shubham} target="_blank" download="Shubham-Jayswal-Resume" onClick={handleResumeButtonClick}>Resume</ResumeButton>
                        {/* </ButtonContainer> */}
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img className='home-img' src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection