import { connect } from "react-redux";
import Friend from "./friend"
import { fetchExpenses, deleteExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";
import { createFriend, deleteFriend } from "../../actions/friend_actions";
import { createComment, deleteComment } from "../../actions/comment_actions"

const mapStateToProps = (state) => {
    return {
        expenses: Object.values(state.entities.expenses),
        users: state.entities.users,
        comments: state.entites.comments,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchExpenses: () => dispatch(fetchExpenses()),
        deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
        createFriend: (friend) => dispatch(createFriend(friend)),
        deleteFriend: (id) => dispatch(deleteFriend(id)),
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend)