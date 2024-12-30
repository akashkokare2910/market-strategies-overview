import React from "react";
import "../styles/StrategyCards.css";

const StrategyCards = ({ strategies, selectedDate }) => {
  if (strategies.length === 0) {
    return (
      <div className="empty-state">
        There are no strategies for <br />
        <strong>{selectedDate}</strong>
      </div>
    );
  }

  const strategyCount = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="strategy-cards">
      {Object.keys(strategyCount).map((strategy) => (
        <div key={strategy} className="card">
          <h3>{strategy}</h3>
          <p>
            {strategyCount[strategy]}{" "}
            {strategyCount[strategy] > 1 ? "Strategies" : "Strategy"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
