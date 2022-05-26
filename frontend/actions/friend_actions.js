import * as FriendAPIUtil from "../util/friend_api_util";

export const RECEIVE_FRIEND = "RECEIVE_FRIEND"
export const REMOVE_FRIEND = "REMOVE_FRIEND"

const receiveFriend = (friend) => {
    return {
        type: RECEIVE_FRIEND,
        friend
    }
}

const removeFriend = (id) => {
    return {
        type: REMOVE_FRIEND,
        id
    }
}

export const createFriend = (friend) => dispatch => FriendAPIUtil.createFriend(friend)
.then(friend => dispatch(receiveFriend(friend)))

export const deleteFriend = (id) => dispatch => FriendAPIUtil.deleteFriend(id)
.then(() => dispatch(removeFriend(id)))