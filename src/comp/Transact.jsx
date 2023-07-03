import { useState } from "react";

function Transaction(props) {
  // Initialize states as default 'empty'
  const [transactionItem, setTransactionItem] = useState("");
  const [transactionType, setTransactiontype] = useState("");
  const [amount, setAmount] = useState("");

  //Add new transaction corresponding with its data values
  const add = () => {
    props.add(transactionItem, amount, transactionType);
  };

  return (
    <div>
      <h1>Create New Transaction</h1>

      <input
        type="text"
        placeholder="Enter item"
        onChange={(e) => setTransactionItem(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <select onChange={(e) => setTransactiontype(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>
      <br></br>
      <button className="cta-btn" onClick={add}>
        Add transaction
      </button>
    </div>
  );
}

export default Transaction;
