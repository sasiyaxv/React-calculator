import React, { useState } from "react";
import BtnNumber from "./BtnNumber";
import BtnOperation from "./BtnOperation";

import "./styles/calculator.css";

const CalculatorFunc = () => {
  const [userInput, setUserInput] = useState(0);

  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);

  function textFieldUpdate(event) {
    setUserInput(event.target.value);
    // console.log( event.target.value);
  }

  function btnClickedNum(params) {
    // alert("clicked");
    // console.log("clicked");
    // console.log(params);
    setUserInput(`${userInput}` + params);
  }

  function btnClickedOperation(param) {
    setUserInput(`${userInput}` + param);
  }

  //   Clear button function
  function btnClearClicked() {
    setUserInput("");
  }

  //   function btnPlusClicked() {
  //     console.log({ userInput });
  //     setVal1(userInput);
  //   }

  function btnEqualClicked(params) {
    console.log({ userInput });

    alert(`${userInput}`);
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-button-wrapper">
        <div className="input-wrapper">
          <input
            value={userInput}
            onChange={textFieldUpdate}
            className="input-calculator"
          ></input>
        </div>

        <div className="btn-row-1">
          <BtnOperation
            value={"C"}
            btnClickedOperation={btnClearClicked}
          ></BtnOperation>
          <BtnOperation
            value={"+/-"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
          <BtnOperation
            value={"%"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
          <BtnOperation
            value={"/"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
        </div>
        <div className="btn-row-2">
          <BtnNumber value={7} btnClicked={btnClickedNum}></BtnNumber>
          <BtnNumber value={8} btnClicked={btnClickedNum}></BtnNumber>
          <BtnNumber value={9} btnClicked={btnClickedNum}></BtnNumber>
          <BtnOperation
            value={"x"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
        </div>
        <div className="btn-row-3">
          <BtnNumber value={4} btnClicked={btnClickedNum}></BtnNumber>
          <BtnNumber value={5} btnClicked={btnClickedNum}></BtnNumber>
          <BtnNumber value={6} btnClicked={btnClickedNum}></BtnNumber>
          <BtnOperation
            value={"-"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
        </div>
        <div className="btn-row-4">
          <BtnNumber value={1} btnClicked={btnClickedNum}></BtnNumber>
          <BtnNumber value={2} btnClicked={btnClickedNum}></BtnNumber>
          <BtnNumber value={3} btnClicked={btnClickedNum}></BtnNumber>
          <BtnOperation
            value={"+"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
        </div>
        <div className="btn-row-5">
          <BtnOperation
            value={"()"}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
          <BtnNumber value={0} btnClicked={btnClickedNum}></BtnNumber>
          <BtnOperation
            value={"."}
            btnClickedOperation={btnClickedOperation}
          ></BtnOperation>
          <BtnOperation
            value={"="}
            btnClickedOperation={btnEqualClicked}
          ></BtnOperation>
        </div>
      </div>
    </div>
  );
};

export default CalculatorFunc;
