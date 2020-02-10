// Coding Test

// A retailer offers a amount program to its customers_id_list, awarding points based on each recorded purchase.
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
    fields: {},
    customerID: "",
    Name: "",
    April: "",
    May: "",
    June: "",
    Total: ""
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  
  change = e => {
    this.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    let input_cid = this.state.customerID;
    if(customers_id_list.indexOf(parseInt(input_cid))!== -1){
      this.setState({
        Name: uniq_cid[parseInt(input_cid)-1].cname,
        April: calculate_rewards(customer_data.filter(customer => customer.cid === parseInt(input_cid) && customer.month === "April")),
        May: calculate_rewards(customer_data.filter(customer => customer.cid === parseInt(input_cid) && customer.month === "May")),
        June: calculate_rewards(customer_data.filter(customer => customer.cid === parseInt(input_cid) && customer.month === "June")),
        Total: calculate_rewards(customer_data.filter(customer => customer.cid === parseInt(input_cid)))
      }); 
    }
    else{
      alert("Enter a valid Customer ID");
    }
  };

  render(){
   return (
    <div className="App">
      <div><h1>Customer Reward Points</h1></div>
        <div>
          <form> 
            <input
              name="customerID"
              placeholder="Enter Customer ID"
              value={this.state.customerID}
              onChange={e => this.change(e)}
              style={{
                backgroundColor: "white",
                height: 30,
                width: 200,
                margin: 5
                }}
              type= "number"
            />
           <br />
           <button onClick={(e) => this.handleClick(e)}>Submit</button>
          </form>
        </div>
     <div>
          <h4>Name: <span>{this.state.Name}</span></h4>
          <h4>April: <span>{this.state.April}</span></h4>
          <h4>May: <span>{this.state.May}</span></h4>
          <h4>June: <span>{this.state.June}</span></h4>
          <h4>Total: <span>{this.state.Total}</span></h4>
     </div>
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

// Creating Array with unique customer id

var uniq_cid = customer_data.filter(function ({cid}) {
  return !this[cid] && (this[cid] = cid);
}, {});

var customers_id_list = [];
for( let i= 0; i < uniq_cid.length; i++){
  customers_id_list.push(uniq_cid[i].cid);
}
