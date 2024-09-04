import React, { useState } from "react";
import "./styles.searchbox.css";
import { transactions } from "../APIclient/data/transactions";
import Button from "../Button/Button";

export default function SearchBox() {
  const [description, setDescription] = useState("");

  const [foundTransactions, setFoundTransactions] = useState();

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = transactions.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      setFoundTransactions(results);
    } else {
      setFoundTransactions();
    }

    setDescription(keyword);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="search"
          value={description}
          onChange={filter}
          className="input"
          placeholder="Search transactions"
        />
      </div>

      <div className="transaction-container">
        <div className="transaction-list">
          {foundTransactions && foundTransactions.length > 0 ? (
            foundTransactions.map((transaction) => (
              <li key={transaction.id} className="transaction-each">
                <span className="transaction-descripton">
                  {transaction.description}
                </span>

                <span className="transaction-amount">
                  {transaction.amount}€
                </span>
              </li>
            ))
          ) : (
            <Button />
          )}
        </div>
      </div>
    </div>
  );
}
