import { connect } from "react-redux";
import AllExpenses from "./all_expenses";
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions"

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
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllExpenses)