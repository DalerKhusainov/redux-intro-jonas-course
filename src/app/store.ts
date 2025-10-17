import { createStore } from "redux";

interface StateType {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState: StateType = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type ActionType =
  | { type: "account/deposit"; payload: number }
  | { type: "account/withdraw"; payload: number }
  | {
      type: "account/requestLoan";
      payload: { amount: number; purpose: string };
    }
  | { type: "account/payLoan" };

function reducer(state: StateType = initialState, action: ActionType) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "Buy a car" },
});
console.log(store.getState());

store.dispatch({ type: "account/payLoan" });
console.log(store.getState());
