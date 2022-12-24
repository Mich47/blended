import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  StatsItem,
  StatsList,
  StatsText,
  Avatar,
  Text,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      fontFamily="body"
      width="container"
      m="0 auto"
      bg="white"
      border=" 1px solid"
      borderColor="border"
      borderRadius="normal"
      boxShadow="main"
    >
      <Box display="flex" alignItems="center" flexDirection="column" p={5}>
        <Avatar src={avatar} alt="User avatar" />
        <Text color="black" fontSize="m" fontWeight="bold">
          {username}
        </Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Box>

      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsText fontSize="m" fontWeight="bold" color="black">
            {followers}
          </StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsText fontSize="m" fontWeight="bold" color="black">
            {views}
          </StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsText fontSize="m" fontWeight="bold" color="black">
            {likes}
          </StatsText>
        </StatsItem>
      </StatsList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
