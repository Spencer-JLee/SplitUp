import React from "react";

class LeftNavBar extends React.Component{
    render(){
        <div className="left-nav-bar">
            <div className="user-dashboard-nav">
                <Link to="/dashboard">Dashboard</Link>
                <Link>Recent activity</Link>
            </div>
            <div className="user-groups-expenses">
                <Link>All expenses</Link>
                <div>
                    <p>Groups</p>
                    <button></button>
                </div>
                <div>
                    <p>Friends</p>
                    <button></button>
                </div>
            </div>
            <div className="user-friends-form">
                <p>Invite friends</p>
                <form action=""></form>
            </div>
        </div>
    }
}

export default LeftNavBar;