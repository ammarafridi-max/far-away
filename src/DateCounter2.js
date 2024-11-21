import { useReducer, useState } from "react";

const initialState = {
  step: 1,
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "increase/count":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "decrease/count":
      return { ...state, count: state.count - state.step };
    case "increase/step":
      return { ...state, step: action.payload };
    case "reset":
      return { ...state, step: 1, count: 1 };
    default:
      throw new Error("Unknown action type");
  }
}

export default function DateCounter2() {
  const [{ step, count }, dispatch] = useReducer(reducer, initialState);

  const newDate = new Date();
  newDate.setDate(newDate.getDate() + count);

  return (
    <div className="date-counter-2">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) =>
          dispatch({ type: "increase/step", payload: Number(e.target.value) })
        }
      />
      {step}

      <br />

      <button onClick={() => dispatch({ type: "decrease/count" })}>-</button>
      <input type="text" value={count} readOnly />
      <button onClick={() => dispatch({ type: "increase/count" })}>+</button>

      {count === 0 && <p>Today is {newDate.toDateString()}</p>}
      {count > 0 && (
        <p>
          {count} days from today is {newDate.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)} days ago was {newDate.toDateString()}
        </p>
      )}

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
