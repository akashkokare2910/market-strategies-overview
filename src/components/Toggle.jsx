import React from "react";
import "../styles/Toggle.css";

const Toggle = ({ selectedView, setSelectedView }) => {
  const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];

  return (
    <div className="toggle-container">
      {views.map((view) => (
        <button
          key={view}
          className={`toggle-button ${selectedView === view ? "active" : ""}`}
          onClick={() => setSelectedView(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
