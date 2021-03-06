import React from "react";
import EditExpenseModalContainer from "../modal/edit_expense_modal_container";

class Expense extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showEditExpense: false,
            body: ""
        }
        this.handleDetails = this.handleDetails.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    toggleModal(){
        const show = this.state.showEditExpense;
        this.setState({showEditExpense: !show})
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault;
        const comment = { author_id: this.props.currentUser.id, body: this.state.body, expense_id: this.props.expense.id }
        this.props.createComment(comment)
    }


    render(){
        if(Object.values(this.props.users).length > 1 && this.props.expense.owner_id && this.props.users){
            const owner = this.props.currentUser === this.props.users[this.props.expense.owner_id] ? 
            'You' : this.props.users[this.props.expense.owner_id].username
            const owner_obj = this.props.users[this.props.expense.owner_id]
            
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
                                    ${parseFloat(this.props.expense.amount).toFixed(2)}
                                </div>
                            </div>
                            
                            <div className="expense-transactions-details">
                                <div className="expense-payer">
                                    {owner} lent
                                </div>
                                <div className={owner === 'You' ? "expense-currentuser-balance" : "expense-balance"}>
                                    ${parseFloat(this.props.expense.balances[this.props.expense.owner_id]).toFixed(2)}
                                </div>
                            </div>
                            <div className="delete-expense" onClick={(e) => e.stopPropagation()}>
                                <button className="delete-expense-button" onClick={() => this.props.deleteExpense(this.props.expense.id)}>X</button>
                            </div>
                        </div>
                    </div>
                    <div id={this.props.expense.id} className="expense-details">
                        <div className="details-expense-transactions">
                            <div className="details-expense-description">
                                {this.props.expense.description}
                            </div>
                            <div className="details-expense-amount">
                                ${parseFloat(this.props.expense.amount).toFixed(2)}
                            </div>
                            <div className="details-expense-owner">
                                Paid by {owner}
                            </div>
                            <button onClick={this.toggleModal} className="details-expense-button">Edit expense</button>
                        </div>
                        <div className="details-balances-comments">
                            <div className="details-expense-balances">
                                <ul>
                                    <li key={`expensedetail`+this.props.expense.owner_id+this.props.expense.id}>
                                        <strong>{owner_obj.username}</strong> paid 
                                        <strong> ${parseFloat(this.props.expense.amount).toFixed(2)} </strong> 
                                        and owes <strong>${parseFloat(this.props.expense.balances[this.props.expense.owner_id]).toFixed(2)}</strong>
                                    </li> 
                                    {this.props.expense.allExpenseMembers.map(id => 
                                        id === this.props.expense.owner_id ? 
                                        null : 
                                        <li key={`expensedetail`+id+this.props.expense.id}>
                                            <strong>{this.props.users[id].username}</strong> owes 
                                            <strong> ${parseFloat(this.props.expense.balances[id]).toFixed(2)}</strong>
                                        </li>
                                        )}   
                                </ul>
                            </div>
                            <div className="expense-comments">
                                <div className="notes-comments">NOTES AND COMMENTS</div>
                                <ul className="comments-list">
                                    {this.props.comments.map(comment => {
                                        return (
                                            <li className="expense-comment">
                                                <div className="comment-header">
                                                    {this.props.users[comment.author_id].username}
                                                    {comment.author_id === this.props.currentUser.id ?
                                                        <button className="delete-comment" onClick={() => this.props.deleteComment(comment.id)}>X</button>
                                                        :
                                                        null}
                                                </div>
                                                <div className="comment-body">
                                                    {comment.body}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <form>
                                    {/* <input type="text" placeholder="Add a comment" onChange={this.update("body")}/> */}
                                    <textarea className="post-comment-body" name="" id="" cols="40" rows="2" placeholder="Add a comment" onChange={this.update("body")}></textarea>
                                    <input className="post-comment-button" type="submit" value={"Post"} onClick={this.handleSubmit}/>
                                </form>
                                {/* <button onClick={this.handleSubmit}>Post</button> */}
                            </div>
                        </div>
                        
                    </div>
                    <EditExpenseModalContainer expense={this.props.expense} show={this.state.showEditExpense} toggleModal={this.toggleModal}/>
                </li>
            )
        }
        else{
            return null;
        }
    }
}

export default Expense;