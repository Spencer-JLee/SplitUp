import React from "react"

class AddExpenseModal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="modal-background">
                <div className="add-expense-modal-container">
                    <div className="add-expense-modal-header">
                        Add an expense
                    </div>
                    <div className="add-expense-modal-form">
                        <form action="">
                            <div className="add-expense-modal-form-users">
                                With <strong>you</strong> and :

                            </div>

                            <div className="add-expense-modal-form-expense">
                                <input type="text" placeholder="Enter a description"/>
                                $<input type="text" placeholder="0.00"/>
                            </div>
                            <div className="add-expense-modal-form-split">
                                Paid by 

                                and split


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