import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

function Customer() {
  const customerFullName = useSelector(
    (state: RootState) => state.customer.fullName
  );

  return <h2>👋 Welcome, {customerFullName}</h2>;
}

export default Customer;

//////// STARTER ///////////
////////////////////////////
/*
function Customer() {
  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;

*/
