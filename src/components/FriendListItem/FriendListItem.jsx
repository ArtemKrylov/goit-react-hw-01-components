import PropTypes from 'prop-types';
import { Friend, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friend className="friend">
      <Status className="friend__status" isOnline={isOnline}></Status>
      <img
        className="friend__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend__name">{name}</p>
    </Friend>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
