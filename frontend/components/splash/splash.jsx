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
                                    <svg className="airplane" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 36 35">
                                        <path d="M7.844 0L1.961 3.5l11.766 7 3.922 2.333L9.805 17.5 3.922 14 0 16.333l3.922 2.334 1.961 1.166L3.922 21l1.961 1.167V24.5l1.961-1.167v7L11.766 28v-7l7.844-4.667V35l3.922-2.333 1.96-1.167v-7l1.962-1.167V21l-1.961 1.167v-2.334l1.96-1.166v-2.334l-1.96 1.167v-4.667l5.883-3.5L35.298 7V4.667L33.337 3.5l-9.805 5.833L19.61 7l1.961-1.167-1.961-1.166-1.961 1.166-1.961-1.166 1.96-1.167-1.96-1.167L13.727 3.5z"></path>
                                    </svg>
                                    <svg className="house" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 34 32">
                                        <path d="M27.736 15.229V31.02H20.56V22.6h-7.177v8.423H6.207V15.228l7.176-4.211 3.588-2.106 10.765 6.317zm-.03-6.335l5.412 3.176v2.106H29.53l-12.559-7.37-12.558 7.37H.824V12.07l16.147-9.475 7.177 4.211V.49h3.557v8.405z"></path>
                                    </svg>
                                    <svg className="heart" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 31 29">
                                        <path d="M15.163 4.311L7.653-.043.143 4.311v15.237l15.02 8.707 15.02-8.707V4.311l-7.51-4.354z"></path>
                                    </svg>
                                    <svg className="asterisk" xmlns="https://www.w3/org/2000/svg" viewBox="0 0 29 30">
                                        <path d="M11.673.979v9.055L3.519 5.506.461 10.6l8.154 4.528-8.154 4.527L3.52 24.75l8.154-4.528v9.056h6.115V20.22l8.154 4.528L29 19.655l-8.154-4.527L29 10.6l-3.058-5.094-8.154 4.528V.979z"></path>
                                    </svg>
                                </div>
                                <p className="keep-track">
                                    Keep track of your shared expenses and balances
                                    with housemates, trips, groups, friends, and family.
                                </p>
                                <Link to="/signup">
                                    <button>Sign up</button>
                                </Link>
                            </div>
                            <div className="svg-icons">
                                <svg className="big-airplane" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 36 35">
                                    <path d="M7.844 0L1.961 3.5l11.766 7 3.922 2.333L9.805 17.5 3.922 14 0 16.333l3.922 2.334 1.961 1.166L3.922 21l1.961 1.167V24.5l1.961-1.167v7L11.766 28v-7l7.844-4.667V35l3.922-2.333 1.96-1.167v-7l1.962-1.167V21l-1.961 1.167v-2.334l1.96-1.166v-2.334l-1.96 1.167v-4.667l5.883-3.5L35.298 7V4.667L33.337 3.5l-9.805 5.833L19.61 7l1.961-1.167-1.961-1.166-1.961 1.166-1.961-1.166 1.96-1.167-1.96-1.167L13.727 3.5z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="splash-features">
                        <div className="splash-top-features">
                            <div className="splash-track-balances">
                                <h1 className="headers">Track balances</h1>
                                <p className="descriptions">Keep track of shared expenses, balances, and who owes who</p>
                                <img src={window.trackBalances} alt="" />
                            </div>
                            <div className="splash-organize-expenses">
                                <h1 className="headers">Organize expenses</h1>
                                <p className="descriptions">
                                    Split expenses with any group: trips, housemates,
                                    friends, and family.
                                </p>
                                <img src={window.organizeExpenses} alt="" />
                            </div>
                        </div>
                        <div className="splash-bottom-features">
                            <div className="splash-add-expenses">
                                <h1 className="headers">Add expenses easily</h1>
                                <p className="descriptions">
                                    Quickly add expenses on the go before you forget who
                                    paid.
                                </p>
                                <img src={window.addExpenses} alt="" />
                            </div>
                            <div className="splash-pay-back">
                                <h1 className="headers">Pay friends back</h1>
                                <p className="descriptions">
                                    Settle up with a friend and record any cash or online
                                    payment.
                                </p>
                                <img src={window.payBack} alt="" />
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
                            <img className="pro-image"src={window.pro} alt="" />
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