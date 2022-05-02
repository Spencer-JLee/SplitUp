import React from "react";

class Expense extends React.Component{
    constructor(props){
        super(props)
        this.handleDetails = this.handleDetails.bind(this)
    }

    handleDetails(id){
        const element = document.getElementById(id)
        if(element === null){

        }
        else if(element.style.display === 'inline'){
            element.style.display = 'none';
        }
        else{
            element.style.display = 'inline';
        }
    }


    render(){
        if(Object.keys(this.props.users).length > 1){
            const owner = this.props.currentUser === this.props.users[this.props.expense.owner_id] ? 
            'You' : this.props.users[this.props.expense.owner_id].username
            
            return (
                <li>
                    <div className="expense-header" onClick={() => this.handleDetails(this.props.expense.id)}>
                        <div className="expense-description">
                            {this.props.expense.description}
                        </div>
                        <div className="expense-transactions">
                            <div className="expense-transactions-details">
                                <div className="expense-payer">
                                    {owner} paid
                                </div>
                                <div className="expense-amount">
                                    ${this.props.expense.amount}
                                </div>
                            </div>
                            
                            <div className="expense-transactions-details">
                                <div className="expense-payer">
                                    {owner} lent
                                </div>
                                <div className={owner === 'You' ? "expense-currentuser-balance" : "expense-balance"}>
                                    ${this.props.expense.balances[this.props.expense.owner_id]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={this.props.expense.id} className="expense-details">
                        <div className="details-expense-transactions">
                            <div className="details-expense-description">
                                {this.props.expense.description}
                            </div>
                            <div className="details-expense-amount">
                                ${this.props.expense.amount}
                            </div>
                            <div className="details-expense-owner">
                                Paid by {owner}
                            </div>
                            <button className="details-expense-button">Edit expense</button>
                        </div>
                        <div className="details-expense-balances">
                            <ul>
                                <li key={`expensedetail`+this.props.expense.owner_id+this.props.expense.id}>
                                    <strong>{this.props.users[this.props.expense.owner_id].username}</strong> paid 
                                    <strong> ${this.props.expense.amount} </strong> 
                                    and owes <strong>${this.props.expense.balances[this.props.expense.owner_id]}</strong>
                                </li> 
                                {this.props.expense.allExpenseMembers.map(id => 
                                    id === this.props.expense.owner_id ? 
                                    null : 
                                    <li key={`expensedetail`+id+this.props.expense.id}>
                                        <strong>{this.props.users[id].username}</strong> owes 
                                        <strong> ${this.props.expense.balances[id]}</strong>
                                    </li>
                                    )}   
                            </ul>
                        </div>
                    </div>
                </li>
            )
        }
        else{
            return null;
        }
    }
}

export default Expense;