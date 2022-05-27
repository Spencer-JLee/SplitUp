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

    componentDidMount(){
        this.props.fetchExpenses()
        this.props.fetchUsers()
    }

    toggleModal(){
        const show = this.state.showAddExpense;
        this.setState({showAddExpense: !show})
    }

    render(){
        if(this.props.expenses){
            const friend = this.props.users[this.props.match.params.friendId]
            const friendExpenses = this.props.expenses.filter(expense => {
                (expense.owner_id === friend.id && expense.allExpenseMembers.includes(this.props.currentUser.id)) ||
                (expense.owner_id === this.props.currentUser.id && expense.allExpenseMembers.includes(friend.id))
            })

            const friendBalance = 0;
            friendExpenses.forEach(expense => {
                const balance = this.props.expense.balances[friend.id]
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
                        </div>
                        <div className="dashboard-buttons">
                            <button onClick={this.toggleModal} className="add-expense-button">Add an expense</button>
                            <button onClick={() => this.props.delete(friend.id)}className="settle-up">Remove Friend</button>
                        </div>
                        <div className="who-owes-who">
                            {friendBalance > 0 ? friend.username + " owes you " + friendBalance : "You owe " + friend.username + " " + (friendBalance * -1)}
                        </div>
                    </div>
                    <ul>
                        {
                            friendExpenses.map(expense => 
                                <Expense key={expense.id} currentUser={this.props.currentUser} users={this.props.users} expense={expense} deleteExpense={this.props.deleteExpense}/>
                            )
                        }
                    </ul>
                    <AddExpenseModalContainer show={this.state.showAddExpense} toggleModal={this.toggleModal}/>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default Friend