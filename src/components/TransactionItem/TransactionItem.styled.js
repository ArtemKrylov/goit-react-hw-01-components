import styled from 'styled-components';

export const TransactionRow = styled.tr`
  background-color: #fff;
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
  }
`;
