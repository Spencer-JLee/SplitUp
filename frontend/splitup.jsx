import React from "react";
import ReactDOM from "react-dom";
// import { login, logout, signup } from "./util/session_api_util"
import configureStore from "./store/store"
import Root from "./components/root"
import { fetchExpenses } from "./actions/expense_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let store;
    if (window.currentUser) {
    const preloadedState = {
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
    store = configureStore();
    }
    // window.getState = store.dispatch;
    // window.dispatch = store.dispatch;
    // window.fetchExpenses = fetchExpenses
    ReactDOM.render(<Root store={store}></Root>, root);
})