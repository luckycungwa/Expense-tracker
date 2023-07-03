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
              <th>Transaction</th>

            </tr>

            </thead>
{/* 
      <h4>PREVIOUS TRANSACTIONS</h4> */}

{props.transactions.map((data) => (
      
          <tr >
            <td>{data.transactionItem}</td>
            <td>{data.amount}</td>
            
            <td className="user-title">
            {/* check if which tracsaction type was chosen (if it is an expense else it is an income)*/}
            {data.transactionType === "Expense" ? (
                <div className="expenseIndicator"></div>
              ) : (
                <div className="medium"></div>
              )}
              <h6>{data.transactionType}</h6>
            </td>
            
          </tr>
          </table>
    </div>
))}
  </div>  
    
  );
};

export default TransactionCard;
