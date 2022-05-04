import { connect } from "react-redux";
import EditExpenseModal from "./edit_expense_modal";
import { updateExpense, fetchExpenses } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions"
import { updateExpenseMember } from "../../actions/expense_members_actions";

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        expenses: Object.values(state.entities.expenses),
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpenses: () => dispatch(fetchExpenses()),
        updateExpense: (expense) => dispatch(updateExpense(expense)),
        fetchUsers: () => dispatch(fetchUsers()),
        updateExpenseMember: (expenseMember) => dispatch(updateExpenseMember(expenseMember))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseModal)