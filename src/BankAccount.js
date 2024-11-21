import { useReducer } from "react";

const initialState = {
  accountOpen: false,
  balance: 0,
  loan: 0,
  activeLoans: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "account/open":
      return { ...state, balance: 500, accountOpen: true };
    case "account/close":
      if (state.balance > 0 || state.loan > 0) return state;
      return {
        ...state,
        balance: 0,
        loan: 0,
        accountOpen: false,
      };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      if (state.balance < 50) return state;
      return { ...state, balance: state.balance - 50 };
    case "add/loan":
      return {
        ...state,
        balance: state.balance + 5000,
        loan: state.loan + 5000,
        activeLoans: state.activeLoans === 1 && state.activeLoans + 1,
      };
    case "pay/loan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };

    default:
      throw new Error("Unknown action type");
  }
}

export default function BankAccount() {
  const [{ accountOpen, balance, loan }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="bank-account">
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
      <button onClick={() => dispatch({ type: "account/open" })}>
        Open Account
      </button>
      <button
        disabled={!accountOpen}
        onClick={() => dispatch({ type: "deposit" })}
      >
        Deposit 150
      </button>
      <button
        disabled={!accountOpen}
        onClick={() => dispatch({ type: "withdraw" })}
      >
        Withdraw 50
      </button>
      <button
        disabled={!accountOpen}
        onClick={() => dispatch({ type: "add/loan" })}
      >
        Loan 5000
      </button>
      <button
        disabled={!accountOpen}
        onClick={() => dispatch({ type: "pay/loan" })}
      >
        Pay Loan
      </button>
      <button
        disabled={!accountOpen}
        onClick={() => dispatch({ type: "account/close" })}
      >
        Close Account
      </button>
    </div>
  );
}
