import { connect } from "react-redux";
import LeftNavBar from "./left_nav_bar";


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);