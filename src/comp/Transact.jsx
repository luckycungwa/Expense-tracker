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
    <div className="section">
    <h1>Create New Transaction</h1>

      <form className="form" onSubmit={add}>
        <label className="label user-data">
          Expenditure:
          <input
            type="text"
            placeholder="Enter item"
            onChange={(e) => setTransactionItem(e.target.value)}
            required
          />
        </label>
        <label className="label user-data">
          Price:
          <input
            type="text"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
      <select onChange={(e) => setTransactiontype(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>
      <br></br>
      <button className="cta-btn user-data" type="submit">
          Add Transaction
        </button>

      {/* <button className="cta-btn" onClick={add}>
        Add transaction
      </button> */}

      </form>
     
    </div>
  );
}

export default Transaction;
