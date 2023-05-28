import PropTypes from "prop-types";
import { Container, Avatar, Description, Header, Tag, Location, Stats, Item, Value } from "./Profile.styled";
export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => (
    <Container>
  <Description>
        <Avatar
            src={avatar}
            alt="User Avatar"
        />
        <Header>{username}</Header>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
    </Description>
  <Stats>
    <Item>
        <span>Followers</span>
        <Value>{followers}</Value>
    </Item>
    <Item>
        <span>Views</span>
        <Value>{views}</Value>
    </Item>
    <Item>
        <span>Likes</span>
        <Value>{likes}</Value>
    </Item>
  </Stats>
</Container>
)
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
}