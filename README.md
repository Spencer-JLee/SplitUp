# SplitUp


## Table of Contents

1. [Introduction](#introduction-a-name"introduction")

2. [Technology Utilized](#technology-utilized-a-name"technology")

3. [Expenses](#expenses-a-name"expenses")

4. [Friends](#friends-a-name"friends")

5. [Comments](#commnents-a-name"comments"a)

6. [Code Snippets](#code-snippets-a-name"code")

---

## Introduction <a name="introduction"></a>

Link to site: [here](https://splitup-1.herokuapp.com/?#/).

SplitUp is a clone of the expense-sharing website Splitwise. With SplitUp, a user can add their friends and record the amount either the user owes or their friend(s) owe. When creating an expense, a user can give a description for that expense, the total amount paid, and how much each person invovled with that expense owes. Users can edit the expense and the expense will update its information dynamically. After a user has added their friends, they will be able to keep track of all expenses associated with that friend as well as the amount they owe/are owed for that friend by clicking on that friend's link. In addition, on the dashboard, the user can keep track of all expenses with all of their friends and the amount they owe/are owed.

---

## Technologies Utilized <a name="technology"></a>

* Ruby
* Rails
* PostgreSQL
* JavaScript
* React
* Redux
* Heroku
* HTML
* CSS

---

## User Auth

A user is able to either sign up as a new user or login into an existing user in the database. Once logged in, the user's id is stored into the state. Based upon the frontend routes, the user is limited to certain pages based upon if they are logged in or not.

```javascript
  render() {
    const form = this.props.formType === "login" ? (
      <div className="login">
        {this.props.errors.length > 0 ? this.handleErrors() : ''}
        <div className="login-container">
          <h1 className="login-title">Log in</h1>
          <form action="" className="login-form">
            <label htmlFor="" className="email-label">Email address
              <input className="text-input" type="text" value={this.state.email} onChange={this.handleInput("email")}/>
            </label>
            <label htmlFor="" className="password-label">Password
              <input className="text-input" type="password" value={this.state.password} onChange={this.handleInput("password")}/>
            </label>
            <button className="login-button" onClick={this.handleSubmit}>Log In</button>
            <button className="demo-button" onClick={this.handleDemo}>Try with a demo</button>
          </form>
          
        </div>
      </div>
    ) : (
      <div className="signup">
        <div className="signup-container">
          <div>
          <a href=""><img className="splitwise-logo"src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" /></a>
          </div>
          <div className="signup-form-container">
            <h2 className="introduce">INTRODUCE YOURSELF</h2>
            {this.props.errors.length > 0 ? this.handleErrors() : ''}
            <form action="" className="signup-form">
              <label className="hi">Hi there! My name is</label>
              <input className="username-input" type="text" value={this.state.username} onChange={this.handleInput("username")}/>
              <div className="other-info">
                <label>
                  Here's my <strong>email address</strong>:
                  <input className="email-input" type="text" value={this.state.email} onChange={this.handleInput("email")}/>
                </label>
                <label>
                  And here's my <strong>password</strong>:
                  <input className="password-input" type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                </label>
              </div>
              <button className="signup-button" onClick={this.handleSubmit}>Sign me up!</button>
            </form>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        {form}
      </div>
    )
```

---

## Expenses <a name="expenses"></a>

An expense shows the description of the expense as well as the total amount the owner paid and the part of the expense that they supposed to contribute. Clicking on the expense shows greater detail of the expense such as the individual members of the expense as well as an edit expense button. 

![all-expenses](/app/assets/images/all-expenses.png)

While creating an expense, users can decide the total amount, the description, and the owner of the expense.
Only friends of the current user can be members of an expense.

![create-expense](/app/assets/images/create-expense.png)
---

## Friends <a name="friends"></a>

Users can add a user to their friends list. Users can search for which friend they would like to add from a drop
down menu. 

![create-friend](/app/assets/images/create-friend.png)

Upon adding a user as a friend, users can click on said friend's link under the friends list. 

![add-friend](/app/assets/images/add-friend.png)

This link will redirect the current user to the friend's page, which shows all of the expenses in which either the current user or the friend is an owner of the expense. Users can perform all of the same actions under the all expenses page.

![friend](/app/assets/images/friend.png)
---

## Code Snippets <a name="code"></a>

```javascript
let youOwe = 0;
let youAreOwed = 0;
this.props.expenses.forEach(expense => {
    if(this.props.currentUser.id === expense.owner_id){
        youAreOwed += Object.values(expense.balances).reduce((a, b) => a + b, 0) - expense.balances[this.props.currentUser.id]
    }
    else{
        youOwe += expense.balances[this.props.currentUser.id]
    }
})

let friendsOwe = {};
let friendsAreOwed = {};

this.props.currentUser.friendsId.forEach((id) => {
    const friend = this.props.users[id];
    const friendExpenses = this.props.expenses.filter(expense => 
        (expense.owner_id === friend.id && expense.allExpenseMembers.includes(this.props.currentUser.id)) ||
        (expense.owner_id === this.props.currentUser.id && expense.allExpenseMembers.includes(friend.id))
    )

    let friendBalance = 0;
    friendExpenses.forEach(expense => {
        const balance = expense.balances[friend.id]
        if(expense.owner_id === this.props.currentUser.id){
            friendBalance += balance
        }
        else{
            friendBalance -= balance
        }
    })

    if(friendBalance > 0){
        friendsOwe[id] = friendBalance
    }
    else{
        friendsAreOwed[id] = friendBalance
    }
})
```
This code block handles the logic of showing the amount the current user is owed,
the amount the current owes, their balance, and how much they are owed/owe amongst
their friends. 

The first loop goes through all of the expenses that are associated 
with the user. For each expense, if the owner is the current user, the amount is 
the user increased by the total amount that all other members of that expense owe.
Otherwise, the amount the user owes is increased by the amount they owe for that expense.

To determine the amount each friend of the current owes/is owed, for each friend,
expenses that both the friend and current user are part and expense that either 
the current user or their friend is owner are filtered. For each of those expenses,
depending on if the current user or the friend is the owner of the expense, the friend's
balance is adjusted. If the balance is greater than 0, it falls under the column
of which the friend owes the user. Otherwise it falls under the column in which
the current user owes the friend.