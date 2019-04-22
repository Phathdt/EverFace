import { combineReducers } from "redux";

import listNewCustomerReducer from "./listNewCustomerReducer";

const rootReducer = combineReducers({
  listNewCustomer: listNewCustomerReducer
});

export default rootReducer;
