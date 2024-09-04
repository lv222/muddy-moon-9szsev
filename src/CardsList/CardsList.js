import React from "react";
import "./styles.CardsList.css";
import { cards } from "../APIclient/data/cards";
import Card from "../Card/Card";
// import { transactions } from "../APIclient/data/transactions";
// import Button from "../Button/Button";

export default function CardsList() {
  return (
    <div className="container">
      {cards.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
