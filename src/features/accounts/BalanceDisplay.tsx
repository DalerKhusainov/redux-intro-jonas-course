import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const accountBalance = useSelector(
    (state: RootState) => state.account.balance
  );

  return <div className="balance">{formatCurrency(accountBalance)}</div>;
}

export default BalanceDisplay;

//////// STARTER ///////////
////////////////////////////
/*
function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(123456)}</div>;
}

export default BalanceDisplay;
*/
