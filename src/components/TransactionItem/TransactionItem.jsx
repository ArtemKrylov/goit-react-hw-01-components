import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionItem.styled';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <TransactionRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionRow>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
