import React from "react";
import "./styles/btnNumber.css";

const BtnNumber = (props) => {
  return (
    <div>
      <button className="button-number">{props.value}</button>
    </div>
  );
};

export default BtnNumber;
