import Constant from "../constants/listPayerConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  payers: []
};

const listPayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.START_GET_PAYER:
      return { ...state, isLoading: true };
    case Constant.GET_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        payers: action.payers
      };
    case Constant.GET_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default listPayerReducer;
