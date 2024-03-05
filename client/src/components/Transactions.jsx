import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
import testTransactions from "./testTransactions";


import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ keyword, addressFrom, addressTo, amount, message, timestamp }) => {
  return (
    <div className="bg-[#181918] m-4 flex flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
          <p className="text-white text-base">Keyword: {keyword}</p>
        </div>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};
const Transactions = () => {
  
    const { transactions, currentAccount } = useContext(TransactionContext);
  
    return (
      <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:p-12 py-12 px-4">
          {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">
              ULTIMAS TRANSACCIONES
            </h3>
          ) : (
            <h3 className="text-white text-3xl text-center my-2">
              CONECTA TU CUENTA PARA VER LAS ULTIMAS TRANSACCIONES
            </h3>
          )}
  
          <div className="flex flex-wrap justify-center items-center mt-10">
            {[...testTransactions, ...transactions].reverse().map((transaction, i) => (
              <TransactionsCard key={i} {...transaction} />
            ))}
          </div>
        </div>
      </div>
    );
  };


export default Transactions;

