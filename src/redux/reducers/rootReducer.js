import { combineReducers } from "redux";

import listNewCustomerReducer from "./listNewCustomerReducer";
import listPayerReducer from "./listPayerReducer";

const rootReducer = combineReducers({
  listNewCustomer: listNewCustomerReducer,
  listPayer: listPayerReducer
});

export default rootReducer;
