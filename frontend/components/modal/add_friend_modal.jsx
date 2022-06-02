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

    componentWillMount(){
        this.props.fetchUsers();
    }

    addFriend = (friend) => {
        this.setState({friend: friend})
    }

    handleSubmit(e){
        e.preventDefault;
        const newFriend = { email: this.state.friend.value }
        this.props.createFriend(newFriend).then(() => this.props.toggleModal())
    }

    render(){
        const users = this.props.users;
        const usernames = [];
        users.forEach(user => {
            if(user !== this.props.currentUser && !this.props.currentUser.friendsId.includes(user.id)){
                usernames.push({value: user.email, label: user.username})
            }
        });
        // console.log(usernames)
        if(Object.keys(this.props.users).length > 1){
            return(
                <div className={this.props.show ? "modal-background" : "modal-background-hide"} onClick={() => this.props.toggleModal()}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            Invite Friends
                        </div>
                        <div className="add-friend-modal-form">
                            <form action="">
                                <Select
                                    options={usernames}
                                    onChange={this.addFriend}
                                />
                            </form>
                            <button className="add-friend-button" onClick={this.handleSubmit}>Send invites and add friends</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AddFriendModal