import React from "react"
import Select from "react-select"

class AddExpenseModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            owner_id: this.props.currentUser.id,
            amount: "",
            description: "",
            split_option: "equally"
        }
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){

        const users = Object.values(this.props.users);
        const usernames = [];
        users.forEach(user => usernames.push(user.username))

        return (
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        Add an expense
                    </div>
                    <div className="add-expense-modal-form">
                        <form action="">
                            <div className="add-expense-modal-form-users">
                                With <strong>you</strong> and :
                                <Select options={usernames} isMulti/>
                            </div>

                            <div className="add-expense-modal-form-expense">
                                <input type="text" placeholder="Enter a description" onChange={this.update("description")}/>
                                $<input type="text" placeholder="0.00" onChange={this.update("amount")}/>
                            </div>
                            <div className="add-expense-modal-form-split">
                                <label htmlFor="owner-id">Paid by</label>
                                <select name="" id="owner-id" onChange={this.update("owner_id")}>
                                    {usernames.map(username => <option value={username}>username</option>)}
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
                                <button className="modal-save-button">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }
}

export default AddExpenseModal;