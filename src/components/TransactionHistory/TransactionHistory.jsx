import { Container } from 'components/Container/Container.styled';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import { TransationsSection } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransationsSection className="section transactions">
      <Container>
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
