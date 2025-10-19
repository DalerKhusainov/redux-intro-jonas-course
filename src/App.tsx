import { useSelector } from "react-redux";
import "./App.css";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import type { RootState } from "./app/store";

function App() {
  const customerFullName = useSelector(
    (state: RootState) => state.customer.fullName
  );

  return (
    <>
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {!customerFullName ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </div>
    </>
  );
}

export default App;
