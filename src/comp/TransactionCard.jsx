import React from "react";

function TransactionCard(props) {
    
  return (
    <div>
      <h4>PREVIOUS TRANSACTIONS</h4>

      {props.transactions.map((data) => (
        <div>
          <div className="list-item">
            <div>
              <h6>{data.transactionItem}</h6>
            </div>

            <div>
              <h6>{data.amount}</h6>
            </div>

            <div>
              {/* check if which tracsaction type was chosen */}
              {data.transactionType === "Expense" ? (
                <div className="expenseIndicator"></div>
              ) : (
                <div className="incomeIndicator"></div>
              )}
              <h6>{data.transactionType}</h6>
            </div>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  );
}

export default TransactionCard;
