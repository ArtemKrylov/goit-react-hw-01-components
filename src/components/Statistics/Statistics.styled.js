import styled from 'styled-components';
import { Section, Title, Card } from 'components/App/App.styled';

export const StatisticsSection = styled(Section)`
  & .statistics__list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    padding: 10px;

    border: 1px solid ${props => props.theme.colors.black};
    box-shadow: ${props => props.theme.shadows.boxDark};
  }

  & .statistics__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  & .statistics__label {
    color: ${props => props.theme.colors.darkGrey};
  }

  & .statistics__percentage {
    font-weight: bold;
  }
`;

export const StatisticsTitle = styled(Title)`
  color: ${props => props.theme.colors.accent};
`;

export const StatisticsCard = styled(Card)`
  padding: 15px;
`;
