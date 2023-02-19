import { Container } from 'components/Container/Container.styled';
import PropTypes from 'prop-types';
import {
  StatisticsCard,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ stats, title = null }) => {
  return (
    <StatisticsSection className="section statistics">
      <Container>
        <StatisticsCard>
          {title ? (
            <StatisticsTitle
              className={title ? 'statistics__title' : 'visually - hidden'}
            >
              {title}
            </StatisticsTitle>
          ) : null}

          <ul className="statistics__list">
            {stats.map(stat => {
              const { id, label, percentage } = stat;
              return (
                <li className="statistics__item" key={id}>
                  <span className="statistics__label">{label}</span>
                  <span className="statistics__percentage">{percentage}</span>
                </li>
              );
            })}
          </ul>
        </StatisticsCard>
      </Container>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
