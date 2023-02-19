import { Card } from 'components/Card/Card.styled';
import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';
import styled from 'styled-components';

export const StatisticsSection = styled(Section)`
  & .statistics__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
