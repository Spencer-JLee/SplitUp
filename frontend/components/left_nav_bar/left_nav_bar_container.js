import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import LeftNavBar from "./left_nav_bar";


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        friendsId: state.entities.users[state.session.id].friendsId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);