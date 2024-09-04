import React from "react";

import "./styles.css";
import SearchBox from "./SearchBox/SearchBox";
import CardsList from "./CardsList/CardsList";

export default function App() {
  return (
    <div className="App">
      <CardsList />
      <SearchBox />
    </div>
  );
}
