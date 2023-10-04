
import React, { useState } from "react";
import styled from 'styled-components';
import { useRef } from 'react';
import { Snackbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubInIcon from "@mui/icons-material/GitHub"
import CallInIcon from "@mui/icons-material/Call"
import EmailinIcon from "@mui/icons-material/Email"
import { Bio } from '../../data/constants';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const DIV = styled.div`
  width: 100%;
  display: flex;
  gap: 2%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const RIGHTDIV = styled.div`
  width: 55%;
`

const LEFTDIV = styled.div`
margin-top: 7%;
width: 38%;
`

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;


const MyEmail = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
   
    @media (max-width: 768px) {
   font-size: 13px;
  }
  }


`
const MyContact = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
   font-size: 13px;
  }
`

const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Contact = () => {
  
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMsg, setUsermsg] = useState("");
  const [userSub, setUserSub] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailbody = [userEmail, userName, userSub, userMsg]


    window.Email.send({
      SecureToken: "3a0f5131-cd12-4011-98fc-17d850be133a",
      To: "shubhammasai03@gmail.com",
      From: "senas17941@byorby.com",
      Subject: "Portfolio Messages",
      Body: emailbody
    }).then(
      message => {
        if (message === "OK") {
          setOpen(true);
          setUserEmail("");
          setUserName("");
          setUserSub("");
          setUsermsg("");
        }
      }
    );
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <DIV>
          <LEFTDIV>
            <EmailWrapper>
              <SocialMediaIcon>
                <EmailinIcon />
              </SocialMediaIcon>
              <MyEmail id="contact-email">shubhammasai03@gmail.com</MyEmail>
            </EmailWrapper>
            <EmailWrapper>
              <SocialMediaIcon>
                <CallInIcon />
              </SocialMediaIcon>
              <MyContact id="contact-phone">7490836140</MyContact>
            </EmailWrapper>

            <EmailWrapper>
              <SocialMediaIcon id="contact-github" href={Bio.github} ><GithubInIcon /></SocialMediaIcon>
              <SocialMediaIcon id="contact-linkedin" href={Bio.linkedin}><LinkedInIcon /></SocialMediaIcon>
            </EmailWrapper>
          </LEFTDIV>
          <RIGHTDIV>
            <ContactForm ref={form} onSubmit={handleSubmit}>
              <ContactTitle>Email Me 🚀</ContactTitle>
              <ContactInput
                placeholder="Your Email"
                name="from_email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <ContactInput
                placeholder="Your Name"
                name="from_name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <ContactInput
                placeholder="Subject"
                name="subject"
                value={userSub}
                onChange={(e) => setUserSub(e.target.value)}
              />
              <ContactInputMessage
                placeholder="Message"
                rows="4"
                name="message"
                value={userMsg}
                onChange={(e) => setUsermsg(e.target.value)}
              />
              <ContactButton type="submit" />
            </ContactForm>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
              message="Email sent successfully!"
              severity="success"
            />
          </RIGHTDIV>
        </DIV>
      </Wrapper>
    </Container>
  );
};

export default Contact;