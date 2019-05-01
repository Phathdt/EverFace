import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import listNewCustomerReducer from "./listNewCustomerReducer";
import listPayerReducer from "./listPayerReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  listNewCustomer: listNewCustomerReducer,
  listPayer: listPayerReducer,
  customer: customerReducer,
  form: formReducer
});

export default rootReducer;
