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

    componentWillMount(){
        this.props.fetchUsers();
    }

    toggleModal(){
        const show = this.state.showAddFriend
        this.setState({ showAddFriend: !show})
    }
    
    render(){
        console.log(this.props.users)
        if(Object.keys(this.props.users).length > 1){
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
                        </div>
                        <div className="friends-list">
                            <ul>
                                {this.props.friendsId.map(id => {
                                    const username = this.props.users[id].username
                                    return (
                                        <li className="friend-item">
                                            <Link to={`/friends/${id}`}>{username}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
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
        else{
            return (
                <div className="left-nav-bar">
                    <div className="user-dashboard-nav">
                        <div className="dashboard-link">
                            <Link className="dashboard-link" to="/dashboard">Dashboard</Link>
                        </div>
                        
                    </div>
                    <div className="user-groups-expenses">
                        <div className="all-expenses-link">
                            <Link to="/all" className="all-expenses-link">All expenses</Link>
                        </div>

                        <div>
    
                        </div>
                        <div className="user-friends">
                            <p className="friends-tag">Friends</p>
                            <button className="button-tag" onClick={this.toggleModal}>add</button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <AddFriendModalContainer show={this.state.showAddFriend} toggleModal={this.toggleModal}/>
                </div>
            )
        }
        
    }
}

export default LeftNavBar;