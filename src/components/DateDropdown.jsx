import React, { useState } from "react";
import "../styles/DateDropdown.css";

const DateDropdown = ({ dateArray, selectedDate, setSelectedDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className={`date-dropdown-container ${isOpen ? "open" : ""}`}>
      <button className="date-dropdown-toggle" onClick={toggleDropdown}>
        {selectedDate || "Select a date"}
      </button>
      {isOpen && (
        <ul className="date-dropdown-list">
          {dateArray.map((date) => (
            <li
              key={date}
              className="date-dropdown-option"
              onClick={() => handleSelect(date)}
            >
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DateDropdown;
