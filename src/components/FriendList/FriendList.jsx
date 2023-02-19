import { Container } from 'components/Container/Container.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendsSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsSection className="section friends">
      <Container>
        <ul className="friends__list">
          {friends.map(friend => (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
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
