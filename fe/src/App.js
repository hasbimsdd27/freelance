import React, { useState } from "react";
import "./App.css";

export default () => {
  const [state, setState] = useState({
    currentNum: "",
    resultNum: 0,
  });

  const ChangeInput = (value) => {
    let text = state.currentNum;
    text += value;
    setState({ ...state, currentNum: text });
  };

  const Result = () => {
    try {
      setState({
        ...state,
        resultNum:
          String(eval(state.currentNum)).length > 3 &&
          String(eval(state.currentNum)).includes(".")
            ? String(eval(state.currentNum).toFixed(4))
            : String(eval(state.currentNum)),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Delete = (type) => {
    let currentInput = state.currentNum;
    let newInput = "";
    if (type === "single") {
      newInput = currentInput.slice(0, -1);
    }
    setState({ ...state, currentNum: newInput, resultNum: 0 });
  };

  return (
    <div className="MainContainer">
      <div className="centeredItem">
        <div className="CalculatorHead">
          <div>{state.currentNum}</div>
          <div>{state.resultNum}</div>
        </div>
        <div className="grid">
          <div></div>
          <div className="other" onClick={() => Delete("all")}>
            C
          </div>

          <div className="other" onClick={() => Delete("single")}>
            Del
          </div>
          <div
            className="operator"
            onClick={() => {
              ChangeInput("/");
            }}
          >
            /
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("7");
            }}
          >
            7
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("8");
            }}
          >
            8
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("9");
            }}
          >
            9
          </div>
          <div
            className="operator"
            onClick={() => {
              ChangeInput("*");
            }}
          >
            *
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("4");
            }}
          >
            4
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("5");
            }}
          >
            5
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("6");
            }}
          >
            6
          </div>
          <div
            className="operator"
            onClick={() => {
              ChangeInput("-");
            }}
          >
            -
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("1");
            }}
          >
            1
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("2");
            }}
          >
            2
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("3");
            }}
          >
            3
          </div>
          <div
            className="operator"
            onClick={() => {
              ChangeInput("+");
            }}
          >
            +
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("0");
            }}
          >
            0
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput("00");
            }}
          >
            00
          </div>
          <div
            className="number"
            onClick={() => {
              ChangeInput(".");
            }}
          >
            .
          </div>
          <div className="operator" onClick={Result}>
            =
          </div>
        </div>
      </div>
    </div>
  );
};
