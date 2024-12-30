import React, { useState } from "react";
import { dateArray, strategyArray } from "../src/resources/data";
import Toggle from "./components/Toggle";
import DateDropdown from "./components/DateDropdown";
import StrategyCards from "./components/StrategyCards";
import "./App.css";

const App = () => {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategies =
    strategyArray.find((item) => item.View === selectedView)?.Value[
      selectedDate
    ] || [];

  return (
    <div className="App">
      <h1>Market Strategies</h1>
      <Toggle selectedView={selectedView} setSelectedView={setSelectedView} />
      <DateDropdown
        dateArray={dateArray}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
  );
};

export default App;
