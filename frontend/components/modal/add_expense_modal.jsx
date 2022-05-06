import React from "react"
import Select from "react-select"

class AddExpenseModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            owner_id: this.props.currentUser.id,
            amount: "",
            description: "",
            split_option: "equally",
            expense_members: [this.props.currentUser]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addExpenseMembers = this.addExpenseMembers.bind(this)
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
        const expense = {owner_id: this.state.owner_id, amount: this.state.amount, description: this.state.description, split_option: this.state.split_option}
        const length = this.state.expense_members.length
        const createExpenseMember = this.props.createExpenseMember
        this.props.createExpense(expense).then(newExpense => {
            this.state.expense_members.forEach(user => {
                let balance;
                switch(newExpense.expense.split_option){
                    case "equally":
                    default:
                        balance = (newExpense.expense.amount / length).toFixed(2)
                }
                const newExpenseMember = { user_id: user.id, expense_id: newExpense.expense.id, balance: balance}
                createExpenseMember(newExpenseMember)
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

        if(this.props.users.length > 1){
            return (
                <div className={this.props.show ? "modal-background" : "modal-background-hide"} onClick={() => this.props.toggleModal()}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            Add an expense
                        </div>
                        <div className="add-expense-modal-form">
                            <form action="">
                                <div className="add-expense-modal-form-users">
                                    With <strong>you</strong> and :
                                    <Select 
                                        options={usernames} 
                                        isMulti
                                        onChange={this.addExpenseMembers}
                                    />
                                </div>
    
                                <div className="add-expense-modal-form-expense">
                                    <input type="text" placeholder="Enter a description" onChange={this.update("description")}/>
                                    <input type="number" placeholder="$0.00" min="0.00" step="0.01" value={this.state.amount} onChange={this.update("amount")}/>
                                </div>
                                <div className="add-expense-modal-form-split">
                                    <label htmlFor="owner-id">Paid by </label>
                                    <select name="" id="owner-id" onChange={this.update("owner_id")}>
                                        {this.state.expense_members.map(user => <option value={user.id}>{user.username}</option>)}
                                    </select>
                                    <label htmlFor="split-options"> and split</label>
                                    <select name="" id="split-options" onChange={this.update("split_option")}>
                                        <option value="equally">equally</option>
                                        <option value="exact_amount">exact amount</option>
                                        <option value="percentages">percentages</option>
                                        <option value="shares">shares</option>
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

export default AddExpenseModal;