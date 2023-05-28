import PropTypes from "prop-types"; 
import { FriendListItem } from "./FriendListItem/FriendListItem";
export const FriendList = ({ friends }) => (
    <ul>
    {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id}></FriendListItem>
    ))}
    </ul>
)
FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired,
        }),
    ),
}