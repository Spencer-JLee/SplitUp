import React from "react";
import SplashNavContainer from "./splash-nav/splash_nav_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Splash from "./splash/splash";
import UserPage from "./user_page/user_page";

class App extends React.Component{
  render(){

    const NavPage = () => {
      return(
        <div>
          <Switch>
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <SplashNavContainer/>
          </Switch>
        </div>
      )
    }


    return(
      <div>
        <Route component={NavPage}></Route>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute component={UserPage}/>
      </div>
    )
  }
}


export default App;