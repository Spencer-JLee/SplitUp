import React from "react";
import { Link } from "react-router-dom";

class LeftNavBar extends React.Component{
    render(){
        return (
            <div className="left-nav-bar">
                <div className="user-dashboard-nav">
                    <Link className="dashboard-link" to="/dashboard">Dashboard</Link>
                    <br />
                    <Link to="/dashboard" className="recent-activity">Recent activity</Link>
                </div>
                <div className="user-groups-expenses">
                    <Link to="/all" className="all-expenses-link">All expenses</Link>
                    <div className="user-groups">
                        <p className="groups-tag">Groups</p>
                        <button className="button-tag">add</button>
                    </div>
                    <div>

                    </div>
                    <div className="user-friends">
                        <p className="friends-tag">Friends</p>
                        <button className="button-tag">add</button>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="user-friends-form">
                    <p className="invite-friends">Invite friends</p>
                    <div className="invite-form-button">
                        <form action="" className="invite-form">
                            <input type="text" className="invite-input"/>
                        </form>
                        <button className="invite-button">Send invite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftNavBar;