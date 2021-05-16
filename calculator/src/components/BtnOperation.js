import React from "react";
import "./styles/btnOperation.css";

const BtnOperation = (props) => {
  return (
    <div>
      <button className="button-operation">{props.value}</button>
    </div>
  );
};

export default BtnOperation;
