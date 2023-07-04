import React from "react";

function TransactionCard(props) {
  return (
    <div className="cover-card">
      <div className="form">
        {/* TABLE FOR WORKER INFORMATION DISPLAY */}
        <table class="user-table left">
          <thead>
            <tr>
              <th>Expenditure</th>
              <th>Amount (R)</th>
              <th>Type</th>
            </tr>
          </thead>
          {props.transactions.map((data) => (
            <tr className="">
              <td>{data.transactionItem}</td>
              <td>{data.amount}</td>

              <td>
                {/* check if which tracsaction type was chosen (if it is an expense else it is an income)*/}
                {data.transactionType === "Expense" ? (
                  <div className="left">
                    <p className="expense-icon" >{data.transactionType}</p>
                  </div>
                ) : (
                  <div >
                    <p className="income-icon">{data.transactionType}</p>
                  </div>

                )}
                
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default TransactionCard;
