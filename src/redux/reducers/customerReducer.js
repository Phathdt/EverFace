import Constant from "../constants/customerConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  customers: [],
  page: 0,
  total_page: 0,
  search: "",
  per_page: 0
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.START_GET_CUSTOMER_PAGE:
      return { ...state, isLoading: true, isLoaded: false, customers: [] };
    case Constant.GET_SUCCESS_CUSTOMER_PAGE:
      let { customers, paginate } = action;

      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        customers: customers,
        page: paginate.current_page,
        total_page: paginate.total_items / paginate.per_page,
        per_page: paginate.per_page
      };
    case Constant.GET_FAILED_CUSTOMER_PAGE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default customerReducer;
