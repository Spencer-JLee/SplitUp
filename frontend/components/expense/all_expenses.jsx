import React from "react";
import Expense from "./expense";
import AddExpenseModalContainer from "../modal/add_expense_modal_container";

class AllExpenses extends React.Component{
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
            return (
                <div className="all-expenses">
                    <div className="all-expenses-header">
                        <div className="all-expenses-title">
                            <h1>All expenses</h1>
                        </div>
                        <div className="dashboard-buttons">
                            <button onClick={this.toggleModal} className="add-expense-button">Add an expense</button>
                            <button className="settle-up">Settle up</button>
                        </div>
                    </div>
                    <ul>
                        {
                            this.props.expenses.map(expense => 
                                <Expense 
                                    key={expense.id} 
                                    // comments={this.props.comments} 
                                    currentUser={this.props.currentUser} 
                                    users={this.props.users} 
                                    expense={expense} 
                                    deleteExpense={this.props.deleteExpense}
                                    createComment={this.props.createComment}
                                    deleteComment={this.props.deleteComment}
                                />                            )
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

export default AllExpenses