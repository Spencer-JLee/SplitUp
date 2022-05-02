import { connect } from "react-redux";
import AddExpenseModal from "./add_expense_modal";
import { createExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions"

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createExpense: (expense) => dispatch(createExpense(expense)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseModal)