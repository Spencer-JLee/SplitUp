import React from "react";
import { Link } from "react-router-dom";
import AddExpenseModalContainer from "../modal/add_expense_modal_container";

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showAddExpense: false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        const show = this.state.showAddExpense;
        this.setState({showAddExpense: !show})
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchExpenses();
    }

    render(){
        if(Object.values(this.props.users).length > 1){
            let youOwe = 0;
            let youAreOwed = 0;

            this.props.expenses.forEach(expense => {
                if(this.props.currentUser.id === expense.owner_id){
                    youAreOwed += Object.values(expense.balances).reduce((a, b) => a + b, 0) - expense.balances[this.props.currentUser.id]
                }
                else{
                    youOwe += expense.balances[this.props.currentUser.id]
                }
            })

            let friendsOwe = {};
            let friendsAreOwed = {};

            this.props.currentUser.friendsId.forEach((id) => {
                const friend = this.props.users[id];
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

                if(friendBalance > 0){
                    friendsOwe[id] = friendBalance
                }
                else{
                    friendsAreOwed[id] = friendBalance
                }
            })
            return (
                <div className="dashboard">
                    <div className="dashboard-header">
                        <div className="dashboard-title">
                            <h1>Dashboard</h1>
                            <div className="dashboard-buttons">
                                <button onClick={this.toggleModal} className="add-expense-button">Add an expense</button>
                                <button className="settle-up">Settle up</button>
                            </div>
                        </div>
                    </div>
                    <div className="user-balances">
                        <div className="total-balance-column">
                            <div>total balance:</div>
                            {
                                (youAreOwed - youOwe) > 0 ? 
                                <div className="you-are-owed-balance">{"$"+(youAreOwed - youOwe).toFixed(2)}</div>:
                                <div className="you-owe-balance">{"$"+(youAreOwed - youOwe).toFixed(2)}</div>
                            }
                            
                        </div>
                        <div className="you-owe-column">
                            <div>you owe:</div>
                            <div className="you-owe-balance">{"$" + youOwe.toFixed(2)}</div>
                        </div>
                        <div className="you-are-owed-column">
                            <div>you are owed:</div>
                            <div className="you-are-owed-balance">{"$" + youAreOwed.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="friends-balances">
                        <div className="you-owe-friends">
                            <div>YOU OWE</div>
                            <ul className="friends-are-owed-list">
                                {Object.keys(friendsAreOwed).map(id => {
                                    return (
                                        <li className="friend-are-owed-link">
                                            <Link to={`/friends/${id}`}>
                                                <div className="friend-are-owed-container">
                                                    <div className="friend-are-owed-username">{this.props.users[id].username}</div>
                                                    <div className="friend-are-owed-balance">you owe <b>${(-1 * friendsAreOwed[id]).toFixed(2)}</b></div>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="friends-owe-you">
                            <div>YOU ARE OWED</div>
                            <ul className="friends-owe-list">
                                {Object.keys(friendsOwe).map(id => {
                                    return (
                                        <li className="friend-owed-link" >
                                            <Link to={`/friends/${id}`}>
                                                <div className="friend-owed-container">
                                                    <div className="friend-owed-username">{this.props.users[id].username}</div>
                                                    <div className="friend-owed-balance">owes you <b>${friendsOwe[id].toFixed(2)}</b></div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <AddExpenseModalContainer show={this.state.showAddExpense} toggleModal={this.toggleModal}/>
                </div>
            )
        }
    }   
}

export default Dashboard;