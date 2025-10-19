// import { useSelector } from "react-redux";
import { connect } from "react-redux";
import type { RootState } from "../../app/store";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }: { balance: number }) {
  // function BalanceDisplay() {
  // const accountBalance = useSelector(
  //   (state: RootState) => state.account.balance
  // );

  return <div className="balance">{formatCurrency(balance)}</div>;
  // return <div className="balance">{formatCurrency(accountBalance)}</div>;
}

function mapStateToProps(state: RootState) {
  return {
    balance: state.account.balance,
  };
}

// export default BalanceDisplay;
export default connect(mapStateToProps)(BalanceDisplay);

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
