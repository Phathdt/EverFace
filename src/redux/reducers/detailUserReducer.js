import Constant from "../constants/detailUserConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  user: {},
  checkin_list: [],
  current_page: 0,
  total_page: 0,
  per_page: 20
};

const detailUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.START_GET_DETAIL_CUSTOMER:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        user: {},
        checkin_list: []
      };
    case Constant.GET_SUCCESS_DETAIL_CUSTOMER:
      let { user, checkin_list, paginate } = action;

      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        user: user,
        checkin_list: checkin_list,
        current_page: paginate.page,
        total_page: Math.floor(paginate.total / paginate.per_page),
        per_page: paginate.per_page
      };
    case Constant.GET_FAILED_DETAIL_CUSTOMER:
      return { ...state, isLoading: false };
    case Constant.DELETE_SUCCESS_DETAIL_CUSTOMER_PAGE:
      return { ...state, user: {}, checkin_list: [] };
    case Constant.CHANGE_PAGE_DETAIL_USER_PAGE:
      let { page } = action;

      return { ...state, current_page: page };
    default:
      return state;
  }
};

export default detailUserReducer;
