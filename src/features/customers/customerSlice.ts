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

type ActionCustomerType =
  | {
      type: "customer/createCustomer";
      payload: { fullName: string; nationalId: string; createdAt: string };
    }
  | { type: "customer/updateCustomer"; payload: string };

export default function customerReducer(
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

export function createCutomer(
  fullName: string,
  nationalId: string
): ActionCustomerType {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName: string): ActionCustomerType {
  return { type: "customer/updateCustomer", payload: fullName };
}
