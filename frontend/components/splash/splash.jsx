import React from "react";
import { Link } from "react-router-dom";
import trackBalances from '../../../app/assets/images/track_balances.png'
import organizeExpenses from '../../../app/assets/images/organize_expenses.png'
import addExpenses from '../../../app/assets/images/add_expenses.png'
import payBack from '../../../app/assets/images/pay_back.png'
import pro from '../../../app/assets/images/pro.png'

class Splash extends React.Component{
    render(){
        return (
            <div className="splash-page">
                <div className="splash-container">
                    <div className="splash-main">
                        <div className="splash-animation">
                            <div className="splash-less-stress">
                                <h1 className="headers">Less stress when sharing expenses with anyone.</h1>
                                <div>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    Keep track of your shared expenses and balances
                                    with housemates, trips, groups, friends, and family.
                                </p>
                                <Link to="/signup">
                                    <button>Sign up</button>
                                </Link>
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="splash-features">
                        <div className="splash-top-features">
                            <div className="splash-track-balances">
                                <h1 className="headers">Track balances</h1>
                                <p className="descriptions">Keep track of shared expenses, balances, and who owes who</p>
                                <img src={trackBalances} alt="" />
                            </div>
                            <div className="splash-organize-expenses">
                                <h1 className="headers">Organize expenses</h1>
                                <p className="descriptions">
                                    Split expenses with any group: trips, housemates,
                                    friends, and family.
                                </p>
                                <img src={organizeExpenses} alt="" />
                            </div>
                        </div>
                        <div className="splash-bottom-features">
                            <div className="splash-add-expenses">
                                <h1 className="headers">Add expenses easily</h1>
                                <p className="descriptions">
                                    Quickly add expenses on the go before you forget who
                                    paid.
                                </p>
                                <img src={addExpenses} alt="" />
                            </div>
                            <div className="splash-pay-back">
                                <h1 className="headers">Pay friends back</h1>
                                <p className="descriptions">
                                    Settle up with a friend and record any cash or online
                                    payment.
                                </p>
                                <img src={payBack} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="splash-pro">
                        <div className="pro-description">
                            <h1 className="headers">Get even more with PRO</h1>
                            <p className="descriptions">
                                Get even more organized with receipt scanning, charts
                                and graphs, currency conversion, and more!
                            </p>
                            <Link to="/signup">
                                <button>Sign Up</button>
                            </Link>
                        </div>
                        <div className="pro-image-div">
                            <img clasName="pro-image"src={pro} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <ul>

                    </ul>
                    <ul>

                    </ul>
                    <ul>

                    </ul>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Splash;