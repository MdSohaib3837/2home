import React from "react";
import "./ToggleInput.scss";
const ToggleInput = ({ Label, ontoggle, name, value }) => {
  return (
    <div className="toggle-container">
      <label>{Label}</label>
      <div>
        <button name={name} value={value}>
          {value ? <div></div> : ""}
          {value ? "Yes" : "No"}
          {value ? "" : <div></div>}
        </button>
      </div>
    </div>
  );
};

export default ToggleInput;
