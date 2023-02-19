import PropTypes from 'prop-types';
import { Container } from 'components/App/App.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsSection className="section friends">
      <Container className="container">
        <ul className="friends__list">
          {friends.map(friend => (
            <FriendListItem friend={friend} key={friend.id} />
          ))}
        </ul>
      </Container>
    </FriendsSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
