import React from "react";
import { Link } from "react-router-dom";
import AddFriendModalContainer from "../modal/add_friend_modal_container";

class LeftNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddFriend: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        const show = this.state.showAddFriend
        this.setState({ showAddFriend: !show})
    }
    
    render(){
        return (
            <div className="left-nav-bar">
                <div className="user-dashboard-nav">
                    <div className="dashboard-link">
                        <Link className="dashboard-link" to="/dashboard">Dashboard</Link>
                    </div>
                    {/* <div className="recent-activity">
                        <Link to="/dashboard" className="recent-activity">Recent activity</Link>
                    </div> */}
                    
                </div>
                <div className="user-groups-expenses">
                    <div className="all-expenses-link">
                        <Link to="/all" className="all-expenses-link">All expenses</Link>
                    </div>
                    {/* <div className="user-groups">
                        <p className="groups-tag">Groups</p>
                        <button className="button-tag">add</button>
                    </div> */}
                    <div>

                    </div>
                    <div className="user-friends">
                        <p className="friends-tag">Friends</p>
                        <button className="button-tag" onClick={this.toggleModal}>add</button>
                        <ul>
                            {this.props.friendsId.map(id => {
                                <li>
                                    <Link to={`/friends/${id}`}>{this.props.users[id].username}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
                {/* <div className="user-friends-form">
                    <p className="invite-friends">Invite friends</p>
                    <div className="invite-form-button">
                        <form action="" className="invite-form">
                            <input type="text" className="invite-input" placeholder="Enter an email address"/>
                        </form>
                        <button className="invite-button">Send invite</button>
                    </div>
                </div> */}
                <AddFriendModalContainer show={this.state.showAddFriend} toggleModal={this.toggleModal}/>
            </div>
        )
    }
}

export default LeftNavBar;