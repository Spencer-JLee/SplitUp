import { connect } from "react-redux";
import AddExpenseModal from "./add_expense_modal";
import { createExpense, fetchExpenses } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";
import { createExpenseMember } from "../../actions/expense_members_actions";

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
        createExpense: (expense) => dispatch(createExpense(expense)),
        fetchUsers: () => dispatch(fetchUsers()),
        createExpenseMember: (expenseMember) => dispatch(createExpenseMember(expenseMember))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseModal)