import styled from 'styled-components';
import _default from '../../themes/default';


export const AboutDiv = styled.div`
width: 100%;
justify-content: center;
`

export const Title = styled.div`
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
export const AboutSection = styled.div`
width: 100%;
  max-width: 800px;
  margin: auto;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: justify;
  font-size: 18px;
  border-radius: 16px;
  padding: 18px 36px;
 
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`