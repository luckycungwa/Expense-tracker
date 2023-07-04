import React from "react";
// import components
import Transaction from "./Transact";
import TransactionCard from "./TransactionCard";

function Home(props) {
  return (
    <>
      <div className="section">
        <div className="container">
        <div className="">
            <Transaction add={props.add} />
          </div>
          <div  className="">
            <TransactionCard transactions={props.transactions} />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
