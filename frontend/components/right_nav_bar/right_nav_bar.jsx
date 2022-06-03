import React from "react";

class RightNavBar extends React.Component{
    render(){
        return (
            <div className="right-nav-bar">
                <div className="nav-github-link">
                    <a href="https://github.com/Spencer-JLee">
                        <img src={window.github} width="50" height="50"/>
                    </a>
                </div>
                <div className="nav-linkedin-link">
                    <a href="https://www.linkedin.com/in/spencer-lee-693335186/">
                        <img src={window.linkedin} width="60" height="50"/>
                    </a>
                </div>
                <div className="nav-angellist-link">
                    <a href="https://angel.co/u/spencer-lee-13">
                        <img src={window.angellist} width="35" height="50"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default RightNavBar