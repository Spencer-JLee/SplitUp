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
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <div className="dashboard-title">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="dashboard-buttons">
                        <button onClick={this.toggleModal} className="add-expense-button">Add an expense</button>
                        <button className="settle-up">Settle up</button>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
                <AddExpenseModalContainer show={this.state.showAddExpense} toggleModal={this.toggleModal}/>
            </div>
        )
    }   
}

export default Dashboard;