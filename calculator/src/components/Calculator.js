// import React, { Component } from "react";
// import BtnNumber from "./BtnNumber";
// import BtnOperation from "./BtnOperation";

// import "./styles/calculator.css";

// export default class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userInput: "" };
//     this.textFieldUpdated = this.textFieldUpdated.bind(this);
//     this.numberBtnClicked = this.numberBtnClicked.bind(this);
//   }

//   textFieldUpdated(event) {
//     this.setState({ userInput: event.target.value });
//     console.log({ userInput: event.target.value });
//   }

//   numberBtnClicked(params) {
//     // console.log(params.target.value);
//   }

//   render() {
//     return (
//       <div className="calculator-wrapper">
//         <div className="calculator-button-wrapper">
//           <div className="input-wrapper">
//             <input
//               onChange={this.textFieldUpdated}
//               className="input-calculator"
//             ></input>
//           </div>

//           <div className="btn-row-1">
//             <BtnOperation value={"C"}></BtnOperation>
//             <BtnOperation value={"+/-"}></BtnOperation>
//             <BtnOperation value={"%"}></BtnOperation>
//             <BtnOperation value={"/"}></BtnOperation>
//           </div>
//           <div className="btn-row-2">
//             <BtnNumber value={7}></BtnNumber>
//             <BtnNumber value={8}></BtnNumber>
//             <BtnNumber value={9}></BtnNumber>
//             <BtnOperation value={"x"}></BtnOperation>
//           </div>
//           <div className="btn-row-3">
//             <BtnNumber value={4}></BtnNumber>
//             <BtnNumber value={5}></BtnNumber>
//             <BtnNumber value={6}></BtnNumber>
//             <BtnOperation value={"-"}></BtnOperation>
//           </div>
//           <div className="btn-row-4">
//             <BtnNumber value={1}></BtnNumber>
//             <BtnNumber value={2}></BtnNumber>
//             <BtnNumber value={3}></BtnNumber>
//             <BtnOperation value={"+"}></BtnOperation>
//           </div>
//           <div className="btn-row-5">
//             <BtnOperation value={"()"}></BtnOperation>
//             <BtnNumber value={0}></BtnNumber>
//             <BtnOperation value={"."}></BtnOperation>
//             <BtnOperation value={"="}></BtnOperation>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // REFERENCE

// // import React, { Component } from "react";

// // export default class PlusTest extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { num1: "", num2: "" };
// //     this.handleChangeNum1 = this.handleChangeNum1.bind(this);
// //     this.handleChangeNum2 = this.handleChangeNum2.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //   handleChangeNum1(event) {
// //     this.setState({ num1: event.target.value });
// //   }
// //   handleChangeNum2(event) {
// //     this.setState({ num2: event.target.value });
// //   }
// //   handleSubmit(event) {
// //     event.preventDefault();
// //     console.log("CLICKED");
// //     alert(parseInt(this.state.num1) + parseInt(this.state.num2));
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <input
// //           type="text"
// //           value={this.state.num1}
// //           onChange={this.handleChangeNum1}
// //         ></input>
// //         <input
// //           type="text"
// //           value={this.state.num2}
// //           onChange={this.handleChangeNum2}
// //         ></input>
// //         <button onClick={this.handleSubmit}>Click</button>
// //         {/* {this.state.num1 + this.state.num2} */}
// //       </div>
// //     );
// //   }
// // }
