import React from "react";
// import components
import Transaction from "./Transact";
import TransactionCard from "./TransactionCard";

function Home(props) {
  return (
    <>
      <div className="cover-card menu-items">
        
        <div className="card-item">
          <div className="menu-items">
          <div>
            <TransactionCard transactions={props.transactions} />
          </div>
          <div>
<Transaction add={props.add} />
          </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
