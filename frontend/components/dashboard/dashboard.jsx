import React from "react";

class Dashboard extends React.Component{
    render(){
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <div className="dashboard-title">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="dashboard-buttons">
                        <button className="add-expense-button">Add an expense</button>
                        <button className="settle-up">Settle up</button>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }   
}

export default Dashboard;