import React from "react";
import { transactions } from "../APIclient/data/transactions";

import "./styles.button.css";
import { useEffect, useState } from "react";

export default function Button() {
  const [filteredTransactions, setFilteredTransaction] = useState(transactions);
  const [currentCard, setCurrentCard] = useState(transactions);

  const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "All") {
      setFilteredTransaction(transactions);
    } else if (currentCard === "date") {
      transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

      const filtered = transactions.filter(
        (filteredTransaction) => filteredTransaction.description
      );
      setFilteredTransaction(filtered);
    } else {
      const filtered = transactions.filter((filteredTransaction) => {
        return (
          filteredTransaction.cardId === currentCard ||
          filteredTransaction.cardId.includes(currentCard)
        );
      });
      setFilteredTransaction(filtered);
    }
  }, [currentCard]);

  return (
    <div className="App">
      <div id="filtered">
        <section className="button-container">
          <button
            onClick={handleBtns}
            type="button"
            value="All"
            className="card__btn"
          >
            All
          </button>
          <button
            onClick={handleBtns}
            type="button"
            value="private"
            className="card__btn"
          >
            Private
          </button>
          <button
            onClick={handleBtns}
            type="button"
            value="business"
            className="card__btn"
          >
            Business
          </button>

          <button
            onClick={handleBtns}
            type="button"
            value="date"
            className="card__btn"
          >
            Sort by date
          </button>
        </section>

        <div className="transaction-container">
          <div className="transaction-list">
            {filteredTransactions.map((filteredTransaction) => (
              <li key={filteredTransaction.id} className="transaction-each">
                <span className="transaction-descripton">
                  {filteredTransaction.description}{" "}
                </span>
                <span className="transaction-amount">
                  {filteredTransaction.amount}€{" "}
                </span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
