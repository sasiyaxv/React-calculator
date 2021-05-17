import React from "react";
import "./styles/btnNumber.css";

const BtnNumber = (props) => {
  return (
    <div>
      <button
        onClick={() => props.btnClicked(props.value)}
        className="button-number"
      >
        {props.value}
      </button>
    </div>
  );
};

export default BtnNumber;

// onClick={() => props.logThis('test string')}
