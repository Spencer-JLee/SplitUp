import React from "react";

class EditExpenseModal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="modal-background">
                <div className="edit-expense-modal-container">
                    <div className="edit-expense-modal-header">
                        Edit expense
                    </div>
                    <div className="edit-expense-modal-form">
                        <form action="">
                            <div className="edit-expense-modal-form-users">

                            </div>

                            <div className="edit-expense-modal-form-expense">

                            </div>
                            <div className="edit-expense-modal-form-split">

                            </div>
                            <div className="edit-expense-modal-form-buttons">
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }
}

export default EditExpenseModal;