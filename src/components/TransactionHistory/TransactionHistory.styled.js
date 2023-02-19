import styled from 'styled-components';
import { Section } from 'components/App/App.styled';

export const TransationsSection = styled(Section)`
  & .transactions__table {
    width: 100%;
    padding: 10px;

    text-align: center;
    border: 1px solid ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.grey};
    box-shadow: ${props => props.theme.shadows.boxAccent};

    & thead {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.white};
    }
  }
`;
