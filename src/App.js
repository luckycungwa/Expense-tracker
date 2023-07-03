import React from "react";
import { useState } from "react";
import "./App.css";
// import my nodes
import Transaction from "./comp/Transact";
import TransactionCard from "./comp/TransactionCard";

import Home from "./comp/Home";

function App() {
  //track transaction data in the array
  const [transactions, setTransactions] = useState([]);

  // adding transaction functionality
  const add = (transactionItem, amount, transactionType) => {
    //Set Transaction states
    setTransactions((transactions) => [
      ...transactions,
      {
        transactionItem: transactionItem,
        amount: amount,
        transactionType: transactionType,
      },
    ]);

    console.log("My Transaction was: " + transactions);
  };

  return (
    <div className="section">
      <Home add={add} transactions={transactions} />

    </div>
  );
}

export default App;
