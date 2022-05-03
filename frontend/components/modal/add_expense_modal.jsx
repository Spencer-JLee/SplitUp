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
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault;
        const expense = Object.assign({}, this.state);
        this.props.createExpense(expense)
    }

    render(){

        const users = Object.values(this.props.users);
        // const usernames = [];
        // users.forEach(user => usernames.push(user.username))

        return (
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        Add an expense
                    </div>
                    <div className="add-expense-modal-form">
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="add-expense-modal-form-users">
                                With <strong>you</strong> and :
                                <Select options={usernames} isMulti onChange={this.update("expense_members")}/>
                            </div>

                            <div className="add-expense-modal-form-expense">
                                <input type="text" placeholder="Enter a description" onChange={this.update("description")}/>
                                $<input type="number" placeholder="0.00" min="0.00" step="0.01" value={this.state.amount} onChange={this.update("amount")}/>
                            </div>
                            <div className="add-expense-modal-form-split">
                                <label htmlFor="owner-id">Paid by</label>
                                <select name="" id="owner-id" onChange={this.update("owner_id")}>
                                    {users.map(user => <option value={user}>{user.username}</option>)}
                                </select>
                                <label htmlFor="">and split</label>
                                <select name="" id="split-options" onChange={this.update("split_option")}>
                                    <option value="equally">equally</option>
                                    <option value="exact_amount">exact amount</option>
                                    <option value="percentages">percentages</option>
                                    <option value="shares">shares</option>
                                </select>
                            </div>
                            <div className="add-expense-modal-form-buttons">
                                <button className="modal-cancel-button">Cancel</button>
                                <button type="submit" className="modal-save-button">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }
}

export default AddExpenseModal;