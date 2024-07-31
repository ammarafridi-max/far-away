import { useState } from "react";

export default function DateCounter2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function incrementCount() {
    setCount((count) => count + step);
  }

  function decrementCount() {
    setCount((count) => count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="date-counter-2">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {step}

      <br />

      <button onClick={decrementCount}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={incrementCount}>+</button>

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

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
