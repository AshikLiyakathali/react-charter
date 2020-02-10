// Coding Test

// A retailer offers a amount program to its customers, awarding points based on each recorded purchase.
// A customer receives 2 points for every dollar spent over $100 in each transaction,
// plus 1 point for every dollar spent over $50 in each transaction (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
// Given a record of every transaction during a three month period, 
// calculate the reward points earned for each customer per month and total.

// Directions:
// · Use React JS
// · Make up a data set to best demonstrate your solution
// · Check solution into GitHub

import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    April: "",
    May: "",
    June: "",
    Total: ""
  }

  handleClick1 = () => {
    this.setState({
      April: calculate_rewards(customer1_april),
      May: calculate_rewards(customer1_may),
      June: calculate_rewards(customer1_june),
      Total: calculate_rewards(customer1_total)
    })
  }

  handleClick2 = () => {
    this.setState({
      April: calculate_rewards(customer2_april),
      May: calculate_rewards(customer2_may),
      June: calculate_rewards(customer2_june),
      Total: calculate_rewards(customer2_total)
    })
  }
  
  handleClick3 = () => {
    this.setState({
      April: calculate_rewards(customer3_april),
      May: calculate_rewards(customer3_may),
      June: calculate_rewards(customer3_june),
      Total: calculate_rewards(customer3_total)
    })
  }

  handleClick4 = () => {
    this.setState({
      April: calculate_rewards(customer4_april),
      May: calculate_rewards(customer4_may),
      June: calculate_rewards(customer4_june),
      Total: calculate_rewards(customer4_total)
    })
  }

  render(){
  return (
    <div className="App">
      <br/><br/>
      <h1>Customer Reward Points</h1>        
      <br/><br/>
      <button onClick = {this.handleClick1}>Customer 1</button>{" "}
      <button onClick = {this.handleClick2}>Customer 2</button>{" "}
      <button onClick = {this.handleClick3}>Customer 3</button>{" "}
      <button onClick = {this.handleClick4}>Customer 4</button>
      <br/><br/>
      <h2>April: {this.state.April}</h2>
      <h2>May: {this.state.May}</h2>
      <h2>June: {this.state.June}</h2>
      <h2>Total: {this.state.Total}</h2>
      <br/><br/>
    </div>
  );
}
}

export default App;

// Function to calculate rewards for each transaction

const reward = (amount) =>{
  var arr = [];
  for(let i = 0; i < amount.length; i++){
      if(amount[i] <= 50){
          arr.push(0);
      }
      else if(amount[i] > 50 && amount[i] <= 100){
          arr.push(amount[i] - 50);
      }
      else{
          arr.push(50 + ((amount[i] - 100) * 2));
      }
  }
  return arr;
}

// Function to calculate the sum of an array

const sum = (array) =>{
  let sum = 0;
  sum = array.reduce((a, b) => a + b);
  return sum;
}

// Function to calculate rewards for each filter

const calculate_rewards = (array) =>{
  var new_array = [];
  for( let i= 0; i < array.length; i++){
      new_array.push(array[i].rewards);
  }
  var reward_points = sum(new_array);
  return reward_points;
}

// Using sample transaction data set for last three months for testing the app

const customer_data = [
  {cid: 1, cname: "Ashik", month: "April", bill: 1, amount: 120},
  {cid: 2, cname: "Dinesh", month: "April", bill: 1, amount: 150},
  {cid: 3, cname: "Rahul", month: "April", bill: 1, amount: 180},
  {cid: 4, cname: "Eric", month: "April", bill: 1, amount: 200},
  {cid: 1, cname: "Ashik", month: "April", bill: 2, amount: 220},
  {cid: 2, cname: "Dinesh", month: "April", bill: 2, amount: 250},
  {cid: 3, cname: "Rahul", month: "April", bill: 2, amount: 280},
  {cid: 4, cname: "Eric", month: "April", bill: 2, amount: 300},
  {cid: 1, cname: "Ashik", month: "April", bill: 3, amount: 320},
  {cid: 2, cname: "Dinesh", month: "April", bill: 3, amount: 350},
  {cid: 1, cname: "Ashik", month: "May", bill: 1, amount: 120},
  {cid: 2, cname: "Dinesh", month: "May", bill: 1, amount: 150},
  {cid: 3, cname: "Rahul", month: "May", bill: 1, amount: 180},
  {cid: 4, cname: "Eric", month: "May", bill: 1, amount: 200},
  {cid: 1, cname: "Ashik", month: "May", bill: 2, amount: 220},
  {cid: 2, cname: "Dinesh", month: "May", bill: 2, amount: 250},
  {cid: 3, cname: "Rahul", month: "May", bill: 2, amount: 280},
  {cid: 4, cname: "Eric", month: "May", bill: 2, amount: 300},
  {cid: 1, cname: "Ashik", month: "May", bill: 3, amount: 320},
  {cid: 2, cname: "Dinesh", month: "May", bill: 3, amount: 350},
  {cid: 1, cname: "Ashik", month: "June", bill: 1, amount: 120},
  {cid: 2, cname: "Dinesh", month: "June", bill: 1, amount: 150},
  {cid: 3, cname: "Rahul", month: "June", bill: 1, amount: 180},
  {cid: 4, cname: "Eric", month: "June", bill: 1, amount: 200},
  {cid: 1, cname: "Ashik", month: "June", bill: 2, amount: 220},
  {cid: 2, cname: "Dinesh", month: "June", bill: 2, amount: 250},
  {cid: 3, cname: "Rahul", month: "June", bill: 2, amount: 280},
  {cid: 4, cname: "Eric", month: "June", bill: 2, amount: 300},
  {cid: 1, cname: "Ashik", month: "June", bill: 3, amount: 320},
  {cid: 2, cname: "Dinesh", month: "June", bill: 3, amount: 350},
];

// Removing the transaction amount into a separate array to calculate the reward points

var amount = [];
for( let i= 0; i < customer_data.length; i++){
  amount.push(customer_data[i].amount);
}

var rewards = reward(amount);

// Adding the rewards in the customer data set

for(let i = 0; i < customer_data.length; i++){
      customer_data[i].rewards = rewards[i];
}
console.log(customer_data);
console.log(JSON.stringify(customer_data[0]));

// Filtering the reward points for each month and the total
// Customer 1
var customer1_total = customer_data.filter(customer => customer.cid === 1);
var customer1_april = customer_data.filter(customer => customer.cid === 1 && customer.month === "April");
var customer1_may = customer_data.filter(customer => customer.cid === 1 && customer.month === "May");
var customer1_june = customer_data.filter(customer => customer.cid === 1 && customer.month === "June");

// Customer 2
var customer2_total = customer_data.filter(customer => customer.cid === 2);
var customer2_april = customer_data.filter(customer => customer.cid === 2 && customer.month === "April");
var customer2_may = customer_data.filter(customer => customer.cid === 2 && customer.month === "May");
var customer2_june = customer_data.filter(customer => customer.cid === 2 && customer.month === "June");

// Customer 3
var customer3_total = customer_data.filter(customer => customer.cid === 3);
var customer3_april = customer_data.filter(customer => customer.cid === 3 && customer.month === "April");
var customer3_may = customer_data.filter(customer => customer.cid === 3 && customer.month === "May");
var customer3_june = customer_data.filter(customer => customer.cid === 3 && customer.month === "June");

// Customer 4
var customer4_total = customer_data.filter(customer => customer.cid === 4);
var customer4_april = customer_data.filter(customer => customer.cid === 4 && customer.month === "April");
var customer4_may = customer_data.filter(customer => customer.cid === 4 && customer.month === "May");
var customer4_june = customer_data.filter(customer => customer.cid === 4 && customer.month === "June");


