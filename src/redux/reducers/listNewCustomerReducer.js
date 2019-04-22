import Constant from "../constants/listNewCustomerConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  customers: []
};

const listNewCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.START_GET_CUSTOMER:
      return { ...state, isLoading: true };
    case Constant.GET_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        customers: action.customers
      };
    case Constant.GET_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default listNewCustomerReducer;
