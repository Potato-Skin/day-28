import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// class Button extends React.Component {
//   state = {
//     counter: 0,
//   };

//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}>{this.state.counter}</button>
//       </div>
//     );
//   }
// }

// OOP -> Objet Oriented Programming
class App extends React.Component {
  state = {
    hello: 0,
    isCool: false,
    user: {
      name: "Nelli",
    },
    multipleObjects: {},
  };

  increment = () => {
    this.setState({
      hello: this.state.hello + 1,
      isCool: true,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello has been said a total of {this.state.hello} times</h1>
          <CanDrink age={17} />
          <CanDrink age={20} />
          <CanDrink />
          {/* <CanDrink age={[]} /> */}
          {/* <Exmple mufasa={"123, simple as do re mi"} /> */}
          <button onClick={this.increment}>INCREMENT</button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <Button /> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Button /> */}
        </header>
        {/* <Button /> */}
      </div>
    );
  }
}

function CanDrink(props) {
  // {{#if props.age < 18}}

  // {{/if}}
  // if (props.age < 18) -> can't
  // can without the `n't`
  // IF THERE IS NO AGE || Error handling ||
  // if (props.age < 18) {
  //   return <div>You can't drink</div>;
  // }
  // return <div>You can drink</div>;
  // 👇 Ternary for simpler conditionals
  // return null;
  // return <div>You can{props.age < 18 ? "'t" : ""} drink</div>;

  // true ? 1 : 2 -> Ternary Expression -> false ? 0 : 4 % 2 === 0 ?  true : 1
  {
    /* <div> {4 > 3} {value ? 1 : 5} {if (true) {
  return <h1>Hello</h1>
}}</div> */
  }
  return typeof props.age === "number" ? (
    <div>You can{props.age < 18 ? "'t" : ""} drink</div>
  ) : (
    <div>No no no nooo, you cant use this component like this</div>
  );
}

// function Exmple(props) {
//   return <div>{props.mufasa}</div>;
// }

// FP -> Functional Programming
// function App() {
// const [something, setSomething] = React.useState("initial value")
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
