import { connect } from "react-redux";
import EditExpenseModal from "./edit_expense_modal";
import { updateExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions"

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateExpense: (expense) => dispatch(updateExpense(expense)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseModal)