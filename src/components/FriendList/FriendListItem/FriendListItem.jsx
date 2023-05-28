import PropTypes from "prop-types";
import { Container, Status } from "./FriendLIstItem.styled";
export const FriendListItem=({ avatar, name, isOnline}) => (
    <Container>
        <Status isOnline={isOnline}></Status>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </Container>
)
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}