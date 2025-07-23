import React, { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum, sub, divid, multy } from "./features/calculation/calcSlice";

function resultReducer(state, action) {
  const { firstNum, secondNum } = action.payload;
  // OPERATIONS
  if (action.type == "sum") {
    return Number(firstNum) + Number(secondNum);
  } else if (action.type == "sub") {
    return Number(firstNum) - Number(secondNum);
  } else if (action.type == "multy") {
    return Number(firstNum) * Number(secondNum);
  } else {
    return Number(firstNum) / Number(secondNum);
  }
}

const App = () => {
  const resultState = useSelector((state) => state.calculation.result);
  const dispatch = useDispatch();
  // Add state To inputs
  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");
  // ADD REDUCER HOOK
  // const [resultState, dispatch] = useReducer(resultReducer, null);

  // EVENETS HANDLERS
  function handleSum() {
    dispatch(
      sum({ firstNumber: firstNumberInput, secondNumber: secondNumberInput })
    );
  }

  function handleSub() {
    dispatch(
      sub({ firstNumber: firstNumberInput, secondNumber: secondNumberInput })
    );
  }

  function handleMulty() {
        dispatch(multy({firstNumber: firstNumberInput, secondNumber: secondNumberInput}));

  }

  function handleDivid() {
        dispatch(divid({firstNumber: firstNumberInput, secondNumber: secondNumberInput}));

  }

  return (
    <div className="app">
      <div className="inputFields">
        <input
          value={firstNumberInput}
          onChange={(event) => {
            setFirstNumberInput(event.target.value);
          }}
          type="number"
          placeholder="First Number"
        />
        <input
          value={secondNumberInput}
          onChange={(event) => {
            setSecondNumberInput(event.target.value);
          }}
          type="number"
          placeholder="Second Number"
        />
      </div>
      <div className="buttons">
        <button onClick={handleSum}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMulty}>*</button>
        <button onClick={handleDivid}>/</button>
      </div>
      <h2 className="showData">{resultState}</h2>
    </div>
  );
};

export default App;
