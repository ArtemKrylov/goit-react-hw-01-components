import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';
import styled from 'styled-components';

export const ProfileSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  & .profile__card {
    margin: 0 auto;
    padding: 20px;
    
    border: 1px solid ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.grey};
    box-shadow: ${props => props.theme.shadows.boxAccent};

    
  }

  & .description {
    width: 100%;
  }

  & .avatar {
    margin: 0 auto;
    padding-bottom: 5px;

    width: 100px;
    object-fit: cover;
  }

  & .profile__stats {
    display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 15px;
    padding: 10px;
		margin: 10px auto 0;	
		width: 100%;

    border: 1px solid ${props => props.theme.colors.black};
    box-shadow: ${props => props.theme.shadows.boxDark};
		
    & li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

		${props => props.theme.media.tablet} {
			flex-direction: row;
      width: 500px;
    }

    ${props => props.theme.media.desktop} {
      width: 550px;

  }

  & .profile__label {
    color: ${props => props.theme.colors.darkGrey};
  }

  & .profile__quantity {
    font-weight: bold;
  }
`;

export const ProfileName = styled(Title)`
  color: ${props => props.theme.colors.accent};
`;
