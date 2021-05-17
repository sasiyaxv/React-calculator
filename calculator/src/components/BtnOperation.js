import React from "react";
import "./styles/btnOperation.css";

const BtnOperation = (props) => {
  return (
    <div>
      <button onClick={props.handleClear} className="button-operation">
        {props.value}
      </button>
    </div>
  );
};

export default BtnOperation;
