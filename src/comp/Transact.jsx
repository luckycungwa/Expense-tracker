import { useState } from "react";

function Transaction(props) {
  // Initialize states as default 'empty'
  const [transactionItem, setTransactionItem] = useState("");
  const [transactionType, setTransactiontype] = useState("");
  const [amount, setAmount] = useState("");

  //Add new transaction corresponding with its data values
  const add = (() => {
    props.add(transactionItem, amount, transactionType);
  })

  return (
    <>
    <div className="cover-card">
      <div className="form" >
        <h1>Create New Transaction</h1>
        <label className="label user-data">
         Source:
          <input
            type="text"
            placeholder="Enter item"
            onChange={(e) => setTransactionItem(e.target.value)}
            required
          />
        </label>
        <label className="label user-data">
         Amount   (R) 
          <input
            type="number"
            placeholder="Amount in Rands"
            onChange={(e) => setAmount(e.target.value )}
            required
          />
        </label>
        <br />
        <select
        type="select"
          className="label user-data"
          onChange={(e) => setTransactiontype(e.target.value)}
          required
        >
          <option>Expense</option>
          <option>Income</option>
          
        </select>
        <br />
        <br />
        <button className="cta-btn user-data" onClick={add}>
          Add Transaction
        </button>

        {/* <button className="cta-btn" onClick={add}>
        Add transaction
      </button> */}
      </div>
    </div>
    </>
  );
}

export default Transaction;
