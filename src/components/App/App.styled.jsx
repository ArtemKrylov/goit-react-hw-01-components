import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 5px;

  text-align: center;
  font-weight: 900;
`;

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

export const Card = styled.div`
  border: 1px solid ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.grey};
  box-shadow: ${props => props.theme.shadows.boxAccent};
`;
