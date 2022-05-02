import React from "react";

class EditExpenseModal extends React.Component{
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

    render(){
        return (
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        Edit expense
                    </div>
                    <div className="edit-expense-modal-form">
                        <form action="">
                            <div className="edit-expense-modal-form-users">
                                With <strong>you</strong> and :
                            </div>

                            <div className="edit-expense-modal-form-expense">
                                <input type="text" placeholder="Enter a description"/>
                                $<input type="text" placeholder="0.00"/>
                            </div>
                            <div className="edit-expense-modal-form-split">
                                Paid by 

                                and split
                            </div>
                            <div className="edit-expense-modal-form-buttons">
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

export default EditExpenseModal;