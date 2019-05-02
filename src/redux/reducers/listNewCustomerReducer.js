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
    case Constant.GET_SUCCESS_CUSTOMER:
      let { customers } = action;

      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        customers: customers
      };
    case Constant.GET_FAILED_CUSTOMER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default listNewCustomerReducer;
