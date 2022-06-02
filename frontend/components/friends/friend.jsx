import React from "react";
import Expense from "../expense/expense"
import AddExpenseModalContainer from "../modal/add_expense_modal_container"

class Friend extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showAddExpense: false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    componentWillMount(){
        this.props.fetchExpenses()
        this.props.fetchUsers()
    }

    toggleModal(){
        const show = this.state.showAddExpense;
        this.setState({showAddExpense: !show})
    }

    render(){
        if(this.props.expenses && Object.values(this.props.users).length > 1){
            const friend = this.props.users[this.props.match.params.friendId]
            const friendExpenses = this.props.expenses.filter(expense => 
                (expense.owner_id === friend.id && expense.allExpenseMembers.includes(this.props.currentUser.id)) ||
                (expense.owner_id === this.props.currentUser.id && expense.allExpenseMembers.includes(friend.id))
            )

            let friendBalance = 0;
            friendExpenses.forEach(expense => {
                const balance = expense.balances[friend.id]
                if(expense.owner_id === this.props.currentUser.id){
                    friendBalance += balance
                }
                else{
                    friendBalance -= balance
                }
            })
            return (
                <div className="all-expenses">
                    <div className="all-expenses-header">
                        <div className="all-expenses-title">
                            <h1>{friend.username}</h1>
                            <div className="dashboard-buttons">
                                <button onClick={this.toggleModal} className="add-expense-button">Add an expense</button>
                                {
                                    this.props.currentUser.friendsId.includes(friend.id) ?
                                    <button onClick={() => this.props.deleteFriend(friend.id).then(this.props.fetchUsers())}className="settle-up">Remove Friend</button>
                                    :
                                    <button onClick={() => this.props.createFriend(friend).then(this.props.fetchUsers())} className="settle-up">Add Friend</button>
                                }
                            </div>
                        </div>
                        
                    </div>
                    {friendBalance > 0 ? 
                        <div className="friend-owes">
                            {friend.username + " owes you $" + friendBalance.toFixed(2) }
                        </div>
                        : 
                        <div className="you-owe">
                            {"You owe " + friend.username + " $" + (friendBalance * -1).toFixed(2)}
                        </div>
                    }
                    
                    <ul>
                        {
                            friendExpenses.map(expense => {
                                const comments = expense.comments;
                                return (
                                    <Expense 
                                        key={expense.id} 
                                        comments={comments} 
                                        currentUser={this.props.currentUser} 
                                        users={this.props.users} 
                                        expense={expense} 
                                        deleteExpense={this.props.deleteExpense}
                                        createComment={this.props.createComment}
                                        deleteComment={this.props.deleteComment}
                                    />
                                )
                            })
                        }
                    </ul>
                    <AddExpenseModalContainer show={this.state.showAddExpense} toggleModal={this.toggleModal}/>
                </div>
            )
        }
    }
}

export default Friend