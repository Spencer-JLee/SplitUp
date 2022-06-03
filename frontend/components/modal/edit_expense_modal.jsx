import React from "react";
import Select from "react-select"

class EditExpenseModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            owner_id: this.props.expense.owner_id,
            amount: this.props.expense.amount,
            description: this.props.expense.description,
            split_option: this.props.expense.split_option,
            expense_members: this.extractExpenseMembers()
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addExpenseMembers = this.addExpenseMembers.bind(this)
    }

    extractExpenseMembers(){
        const arr = []
        this.props.users.forEach(user => {
            if(this.props.expense.allExpenseMembers.includes(user.id)){
               arr.push(user) 
            }
        })
        return arr;
    }

    componentDidMount(){
        this.props.fetchUsers()
        this.props.fetchExpenses()
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    addExpenseMembers = (expense_members) => {
        const allMembers = [this.props.currentUser]
        expense_members.forEach(member => {
            if(member.value !== undefined){
                allMembers.push(member.value)
            }
            else{
                allMembers.push(member)
            }
        })

        this.setState({expense_members: allMembers})
    }

    handleSubmit(e){
        e.preventDefault;
        const expense = {id: this.props.expense.id, owner_id: this.state.owner_id, amount: this.state.amount, description: this.state.description, split_option: this.state.split_option}
        const length = this.state.expense_members.length
        const updateExpenseMember = this.props.updateExpenseMember
        this.props.updateExpense(expense).then(newExpense => {
            this.state.expense_members.forEach(user => {
                let balance;
                switch(newExpense.expense.split_option){
                    case "equally":
                    default:
                        balance = (newExpense.expense.amount / length).toFixed(2)
                }
                const newExpenseMember = { user_id: user.id, expense_id: newExpense.expense.id, balance: balance}
                updateExpenseMember(newExpenseMember)
            })
        }).then(() => this.props.toggleModal())
    }

    render(){
        const users = this.props.users;
        const usernames = [];
        users.forEach(user => {
            if(user !== this.props.currentUser){
                usernames.push({value: user, label: user.username})
            }
        });
        const groupMembers = [];
        this.state.expense_members.forEach(member => {
            if(member !== this.props.currentUser){
                groupMembers.push({ value: member, label: member.username})
            }
        });
        const split_option = this.props.expense.split_option
        const ownerId = this.props.expense.owner_id
        // const owner = users[ownerId-1]
        // const ownerName = owner.username

        if(this.props.users.length > 1){
            return (
                <div className={this.props.show ? "modal-background" : "modal-background-hide"} onClick={() => this.props.toggleModal()}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <div>
                                Edit expense
                            </div>
                            <div>
                                <button className="close-modal-button" onClick={() => this.props.toggleModal()}>X</button>
                            </div>
                        </div>
                        <div className="add-expense-modal-form">
                            <form action="">
                                <div className="add-expense-modal-form-users">
                                    With <strong>you</strong> and :
                                    <Select
                                        defaultValue={groupMembers}
                                        options={usernames} 
                                        isMulti
                                        onChange={this.addExpenseMembers}
                                        isDisabled={true}
                                    />
                                </div>
    
                                <div className="add-expense-modal-form-expense">
                                    <input type="text" placeholder="Enter a description" value={this.state.description} onChange={this.update("description")}/>
                                    <input type="number" placeholder="$0.00" min="0.00" step="0.01" value={this.state.amount} onChange={this.update("amount")}/>
                                </div>
                                <div className="add-expense-modal-form-split">
                                    <label htmlFor="owner-id">Paid by </label>
                                    <select name="" id="owner-id" onChange={this.update("owner_id")}>
                                        {this.state.expense_members.map(user => <option selected={user.id === ownerId ? true : false} value={user.id}>{user.username}</option>)}
                                    </select>
                                    <label htmlFor="split-options"> and split </label>
                                    <select name="" id="split-options" onChange={this.update("split_option")}>
                                        <option selected={split_option === "equally" ? true : false} value="equally">equally</option>
                                        <option selected={split_option === "exact_amount" ? true : false} value="exact_amount">exact amount</option>
                                        <option selected={split_option === "percentage" ? true : false} value="percentages">percentages</option>
                                        <option selected={split_option === "shares" ? true : false} value="shares">shares</option>
                                    </select>
                                </div>
                                <div className="add-expense-modal-form-buttons">
                                    <button onClick={() => this.props.toggleModal()} className="modal-cancel-button">Cancel</button>
                                    <button onClick={this.handleSubmit} className="modal-save-button">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>  
            )
        }
        else{
            return null;
        }
    }
}

export default EditExpenseModal;