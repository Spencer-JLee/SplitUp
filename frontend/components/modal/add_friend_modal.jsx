import React from "react";
import Select from "react-select";

class AddFriendModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddExpense: false,
            friend: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(){
        
    }

    render(){
        const users = this.props.users;
        const usernames = [];
        users.forEach(user => {
            if(user !== this.props.currentUser && !this.props.currentUser.friendsId.includes(user.id)){
                usernames.push({value: user, label: user.username})
            }
        });
        // console.log(usernames)
        if(this.props.users.length > 1){
            return(
                <div className={this.props.show ? "modal-background" : "modal-background-hide"} onClick={() => this.props.toggleModal()}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            Add a Friend
                        </div>
                        <div className="add-friend-modal-form">
                            <form action="">
                                <Select
                                    options={usernames}
                                    onChange={this.update("friend")}
                                />
                            </form>
                            <button onClick={this.handleSubmit}>Add friend</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AddFriendModal