import React from "react";
// import components
import Transaction from "./Transact";
import TransactionCard from "./TransactionCard";

function Home(props) {
  return (
    <>
      <div className="main-menu">
        
        <div>
          <div className="">
            <TransactionCard transactions={props.transactions} />
            <Transaction add={props.add} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
