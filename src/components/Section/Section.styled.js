import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
  ${props => props.theme.media.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  ${props => props.theme.media.desktop} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;
