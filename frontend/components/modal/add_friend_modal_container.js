import { connect } from "react-redux";
import AddFriendModal from "./add_friend_modal";
import { createFriend } from "../../actions/friend_actions"
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        expenses: Object.values(state.entities.expenses),
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        createFriend: (friend) => dispatch(createFriend(friend))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendModal)

