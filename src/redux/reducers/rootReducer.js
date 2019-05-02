import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import listNewCustomerReducer from "./listNewCustomerReducer";
import listPayerReducer from "./listPayerReducer";
import customerReducer from "./customerReducer";
import detailUserReducer from "./detailUserReducer";

const rootReducer = combineReducers({
  listNewCustomer: listNewCustomerReducer,
  listPayer: listPayerReducer,
  customer: customerReducer,
  detailUser: detailUserReducer,
  form: formReducer
});

export default rootReducer;
