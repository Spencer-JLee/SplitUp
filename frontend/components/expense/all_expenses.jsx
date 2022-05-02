import React from "react";
import Expense from "./expense";

class AllExpenses extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showAddExpense: false
        }
    }

    componentDidMount(){
        this.props.fetchExpenses()
        this.props.fetchUsers()
    }

    render(){
        if(this.props.expenses){
            return (
                <div className="all-expenses">
                    <div className="all-expenses-header">
                        <div className="all-expenses-title">
                            <h1>All expenses</h1>
                        </div>
                        <div className="dashboard-buttons">
                            <button className="add-expense-button">Add an expense</button>
                            <button className="settle-up">Settle up</button>
                        </div>
                    </div>
                    <ul>
                        {
                            this.props.expenses.map(expense => 
                                <Expense key={expense.id} currentUser={this.props.currentUser} users={this.props.users} expense={expense}/>
                            )
                        }
                    </ul>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default AllExpenses