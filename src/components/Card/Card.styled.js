import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.grey};
  box-shadow: ${props => props.theme.shadows.boxAccent};
`;
