interface StateAccountType {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialStateAccount: StateAccountType = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type ActionAccountType =
  | { type: "account/deposit"; payload: number }
  | { type: "account/withdraw"; payload: number }
  | {
      type: "account/requestLoan";
      payload: { amount: number; purpose: string };
    }
  | { type: "account/payLoan" };

export default function accountReducer(
  state: StateAccountType = initialStateAccount,
  action: ActionAccountType
) {
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

export function deposit(amount: number): ActionAccountType {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(number: number): ActionAccountType {
  return { type: "account/withdraw", payload: number };
}

export function requestLoan(
  amount: number,
  purpose: string
): ActionAccountType {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

export function payLoan(): ActionAccountType {
  return { type: "account/payLoan" };
}
