import { connect } from "react-redux";
import AllExpenses from "./all_expenses";
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from "../../actions/expense_actions";

const mapStateToProps = (state) => {
    return {
        expenses: Object.values(state.entities.expenses)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpenses: () => dispatch(fetchExpenses()),
        createExpense: (expense) => dispatch(createExpense(expense)),
        updateExpense: (expense) => dispatch(updateExpense(expense)),
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllExpenses)