import { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function incrementStep() {
    setStep((step) => step + 1);
  }

  function decrementStep() {
    setStep((step) => step - 1);
  }

  function incrementCount() {
    setCount((count) => count + step);
  }

  function decrementCount() {
    setCount((count) => count - step);
  }

  return (
    <div className="date">
      <div className="step">
        <button onClick={decrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={incrementStep}>+</button>
      </div>
      <div className="count">
        <button onClick={decrementCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      {count === 0 && <p>Today is {date.toDateString()}</p>}
      {count > 0 && (
        <p>
          {count} days from today is {date.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)} days ago was {date.toDateString()}
        </p>
      )}
    </div>
  );
}
