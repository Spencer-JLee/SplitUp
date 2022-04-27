import React from "react";
import { Switch } from "react-router-dom";
import LeftNavBarContainer from "../left_nav_bar/left_nav_bar_container"
import DashboardContainer from "../dashboard/dashboard_container"
import { ProtectedRoute } from "../../util/route_util";
import RightNavBar from "../right_nav_bar/right_nav_bar";

class UserPage extends React.Component{
    render(){
        return (
            <div className="user-page">
                <LeftNavBarContainer currentUser={this.props.currentUser}/>
                <Switch>
                    <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
                </Switch>
                <RightNavBar/>
            </div>
        )
    }
}

export default UserPage;