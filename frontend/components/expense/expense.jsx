import React from "react";

class Expense extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.handleDetails = this.handleDetails.bind(this)
    }

    handleDetails(e){
        const newState = !this.state.show
        this.setState({show: newState})
    }


    render(){
        return (
            <li>
                <div>
                    <div>
                        {this.props.expense.description}
                    </div>
                    <div>
                        {this.props.expense.amount}

                        {/* The amount the user paid/lent */}
                    </div>
                </div>
                <div onClick={this.handleDetails} className={this.state.show ? "expense-details" : "expense-details-hide"}>
                    <div>
                        {this.props.expense.description}
                        {this.props.expense.amount}
                        Paid by 
                        <button>Edit expense</button>
                    </div>
                    <div>
                        {/* For each of the users in allExpensesMembers of expense, return the balance for each user */}
                    </div>
                </div>
            </li>
        )
    }
}

export default Expense;