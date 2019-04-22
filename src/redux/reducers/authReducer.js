import authConstant from "../constants/authConstant";

const initialState = {
  isLogin: false,
  isPending: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.LOGIN:
      return { ...state, isPending: true };
    case authConstant.LOGIN_SUCCESS:
      return { ...state, isLogin: true, user: action.user, isPending: false };
    case authConstant.LOGIN_FAIL:
      return { ...state, isPending: false };
    case authConstant.LOG_OUT:
      return { ...state, isLogin: false, user: {} };
    case authConstant.GET_CURRENT_USER:
      return { ...state, isLogin: true, user: action.user };
    default:
      return state;
  }
};

export default authReducer;
