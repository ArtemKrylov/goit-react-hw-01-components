import { Section } from 'components/Section/Section.styled';
import styled from 'styled-components';

export const FriendsSection = styled(Section)`
  & .friends__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;

    & li {
      width: 100%;

      ${props => props.theme.media.tablet} {
        width: calc(20% - 80px / 5);
      }
    }

    ${props => props.theme.media.tablet} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
`;
