import { createStore, combineReducers } from "redux";

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

interface StateCustomerType {
  fullName: string | null;
  nationalId: string | null;
  createdAt: string | null;
}

const initialStateCustomer: StateCustomerType = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

type ActionAccountType =
  | { type: "account/deposit"; payload: number }
  | { type: "account/withdraw"; payload: number }
  | {
      type: "account/requestLoan";
      payload: { amount: number; purpose: string };
    }
  | { type: "account/payLoan" };

function accountReducer(
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

type ActionCustomerType =
  | {
      type: "customer/createCustomer";
      payload: { fullName: string; nationalId: string; createdAt: string };
    }
  | { type: "customer/updateCustomer"; payload: string };

function customerReducer(
  state: StateCustomerType = initialStateCustomer,
  action: ActionCustomerType
) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        natinalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

function deposit(amount: number): ActionAccountType {
  return { type: "account/deposit", payload: amount };
}

function withdraw(number: number): ActionAccountType {
  return { type: "account/withdraw", payload: number };
}

function requestLoan(amount: number, purpose: string): ActionAccountType {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan(): ActionAccountType {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(1000));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

function createCutomer(
  fullName: string,
  nationalId: string
): ActionCustomerType {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName: string): ActionCustomerType {
  return { type: "customer/updateCustomer", payload: fullName };
}

store.dispatch(createCutomer("Daler Khusainov", "234343"));
console.log(store.getState());
