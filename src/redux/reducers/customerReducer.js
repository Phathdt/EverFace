import Constant from "../constants/customerConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  customers: [],
  current_page: 0,
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
        current_page: paginate.page,
        total_page: paginate.total,
        per_page: paginate.per_page
      };
    case Constant.GET_FAILED_CUSTOMER_PAGE:
      return { ...state, isLoading: false };
    case Constant.CHANGE_PAGE_CUSTOMER_PAGE:
      let { page } = action;

      return { ...state, current_page: page };
    default:
      return state;
  }
};

export default customerReducer;
