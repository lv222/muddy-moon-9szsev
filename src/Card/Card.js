import React from "react";
import "./styles.card.css";
// import Button from "../Button/Button";

export default function Card({ item }) {
  return (
    <div className="card">
      <h2 className="card__title">{item.description}</h2>

      {/* <Button key={item.amount} item={item} /> */}
    </div>
  );
}
