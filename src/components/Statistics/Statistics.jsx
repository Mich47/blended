import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatTitle, StatList, StatItem, StatText } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      fontFamily="body"
      width="section"
      m="20px auto"
      bg="white"
      border=" 1px solid"
      borderColor="border"
      borderRadius="normal"
      boxShadow="main"
      as="section"
    >
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} bg={getRandomHexColor()}>
              <StatText fontSize="xs">{label}</StatText>
              <StatText fontWeight="bold" fontSize="m">
                {percentage}%
              </StatText>
            </StatItem>
          );
        })}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
