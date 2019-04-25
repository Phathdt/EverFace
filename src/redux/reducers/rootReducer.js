import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import listNewCustomerReducer from "./listNewCustomerReducer";
import listPayerReducer from "./listPayerReducer";

const rootReducer = combineReducers({
  listNewCustomer: listNewCustomerReducer,
  listPayer: listPayerReducer,
  form: formReducer
});

export default rootReducer;
