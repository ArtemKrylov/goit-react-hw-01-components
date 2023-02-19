import { Container } from 'components/Container/Container.styled';
import PropTypes from 'prop-types';
import { ProfileName, ProfileSection } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileSection className="profile">
      <Container>
        <div className="profile__card">
          <div className="profile__description">
            <img src={avatar} alt="User avatar" className="avatar" />
            <ProfileName className="profile__name">{username}</ProfileName>
            <p className="profile__tag">@{tag}</p>
            <p className="profile__location">{location}</p>
          </div>

          <ul className="profile__stats">
            <li>
              <span className="profile__label">Followers</span>
              <span className="profile__quantity">{followers}</span>
            </li>
            <li>
              <span className="profile__label">Views</span>
              <span className="profile__quantity">{views}</span>
            </li>
            <li>
              <span className="profile__label">Likes</span>
              <span className="profile__quantity">{likes}</span>
            </li>
          </ul>
        </div>
      </Container>
    </ProfileSection>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
