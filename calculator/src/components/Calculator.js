import React, { Component } from "react";
import ButtonLayout from "./ButtonLayout";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
  }

  render() {
    return (
      <div className="Calculator">
        <input></input>
        <ButtonLayout value={0}></ButtonLayout>
        <ButtonLayout value={1}></ButtonLayout>
      </div>
    );
  }
}

// REFERENCE

// import React, { Component } from "react";

// export default class PlusTest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { num1: "", num2: "" };
//     this.handleChangeNum1 = this.handleChangeNum1.bind(this);
//     this.handleChangeNum2 = this.handleChangeNum2.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChangeNum1(event) {
//     this.setState({ num1: event.target.value });
//   }
//   handleChangeNum2(event) {
//     this.setState({ num2: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     console.log("CLICKED");
//     alert(parseInt(this.state.num1) + parseInt(this.state.num2));
//   }
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.num1}
//           onChange={this.handleChangeNum1}
//         ></input>
//         <input
//           type="text"
//           value={this.state.num2}
//           onChange={this.handleChangeNum2}
//         ></input>
//         <button onClick={this.handleSubmit}>Click</button>
//         {/* {this.state.num1 + this.state.num2} */}
//       </div>
//     );
//   }
// }
