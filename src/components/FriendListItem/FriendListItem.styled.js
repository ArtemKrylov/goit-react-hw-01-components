import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.accent};
  box-shadow: ${props => props.theme.shadows.boxAccent};
  background-color: ${props => props.theme.colors.grey};

  & .friend__avatar {
    padding: 5px;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 25%;
  }

  & .friend__name {
    font-weight: bold;
  }
`;

export const Status = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
