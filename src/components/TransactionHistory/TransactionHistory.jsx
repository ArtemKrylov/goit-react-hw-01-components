import PropTypes from 'prop-types';

import { Container } from 'components/App/App.styled';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { TransationsSection } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransationsSection className="section transactions">
      <Container className="container">
        <table className="transactions__table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => (
              <TransactionItem item={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </Container>
    </TransationsSection>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
