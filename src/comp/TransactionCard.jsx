import React from "react";

function TransactionCard(props) {

  return (
    <div className="main-menu">
<div className="user-section">
        
        {/* TABLE FOR WORKER INFORMATION DISPLAY */}
        <table class="user-table">
       
          <thead>
            <tr>
              <th>Expenditure</th>
              <th>Amount</th>
              <th>Type</th>

            </tr>

            </thead>

      

{props.transactions.map((data) => (
          <tr >
            <td>{data.transactionItem}</td>
            <td>{data.amount}</td>
            
            <td className="">
            {/* check if which tracsaction type was chosen (if it is an expense else it is an income)*/}
            {data.transactionType === "Expense" ? (
                <div className="expense-icon"></div>
              ) : (
                <div className="transact-icon"></div>
              )}
              <h6>{data.transactionType}</h6>
            </td>
            
          </tr>
          ))}
          </table>
    </div>

  </div>  
    
  );
};

export default TransactionCard;
