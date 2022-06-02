import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions"
import { fetchExpenses } from "../../actions/expense_actions";
import Dashboard from "./dashboard";

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        expenses: Object.values(state.entities.expenses),
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchExpenses: () => dispatch(fetchExpenses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);