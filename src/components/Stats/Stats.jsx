import React, { useState } from "react";
import "./Stats.css";

const Stats = ({ onInputChange }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("imperial");

  const handleHeightChange = (event) => {
    const newHeight = event.target.value;
    setHeight(newHeight);
  };

  const handleWeightChange = (event) => {
    const newWeight = event.target.value;
    setWeight(newWeight);
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    if (selectedUnit === "metric") {
    }
  };

  return (
    <div>
      <div className="metr-imp">
        <button
          className="imp-btn"
          onClick={() => handleUnitChange("imperial")}
          style={{
            background: unit === "imperial" ? "#5FCB3933" : "transparent",
          }}
        >
          IMPERIAL
        </button>
        <button
          className="metr-btn"
          onClick={() => handleUnitChange("metric")}
          style={{
            background: unit === "metric" ? "#5FCB3933" : "transparent",
          }}
        >
          METRIC
        </button>
      </div>
      <div className="select-div">
        <select
          className="height-select"
          id="height"
          name="height"
          value={height}
          onChange={handleHeightChange}
        >
          <option value="">{`Height(${
            unit === "metric" ? "cm" : "ft"
          })`}</option>
          {Array.from({ length: unit === "metric" ? 151 : 51 }, (_, index) =>
            unit === "metric" ? index + 100 : (index + 32) / 10
          ).map((value) => (
            <option key={value} value={value}>
              {value} {unit === "metric" ? "cm" : "ft"}
            </option>
          ))}
        </select>

        <select
          className="weight-select"
          id="weight"
          name="weight"
          value={weight}
          onChange={handleWeightChange}
        >
          <option value="">{`Current Weight(${
            unit === "metric" ? "kg" : "lb"
          })`}</option>
          {Array.from({ length: unit === "metric" ? 151 : 51 }, (_, index) =>
            unit === "metric" ? index + 30 : index + 66
          ).map((value) => (
            <option key={value} value={value}>
              {value} {unit === "metric" ? "kg" : "lb"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Stats;
