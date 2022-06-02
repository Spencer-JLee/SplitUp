import React from "react";
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

    render(){
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
                        <div></div>
                    </div>
                    <div className="friends-owe-you">
                        <div>YOU ARE OWED</div>
                        <div></div>
                    </div>
                </div>
                <AddExpenseModalContainer show={this.state.showAddExpense} toggleModal={this.toggleModal}/>
            </div>
        )
    }   
}

export default Dashboard;