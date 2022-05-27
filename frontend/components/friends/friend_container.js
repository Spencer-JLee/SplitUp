import { connect } from "react-redux";
import Friend from "./friend"
import { fetchExpenses, deleteExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";
import { deleteFriend } from "../../actions/friend_actions";

const mapStateToProps = (state) => {
    return {
        expenses: Object.values(state.entities.expenses),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchExpenses: () => dispatch(fetchExpenses()),
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
        deleteFriend: (id) => dispatch(deleteFriend(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend)