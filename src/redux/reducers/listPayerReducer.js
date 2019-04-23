import Constant from "../constants/listPayerConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  payers: [],
  payer: {}
};

const listPayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.START_GET_PAYER:
      return { ...state, isLoading: true, payers: [] };
    case Constant.GET_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        payers: action.payers
      };
    case Constant.GET_FAILED:
      return { ...state, isLoading: false };
    case Constant.SELECT_PAYER:
      const { payer } = state;
      let selectPayer = {};

      if (payer.user_id) {
        if (payer.user_id === action.user_id) {
          selectPayer = {};
          return { ...state, payer: {} };
        } else {
          selectPayer = state.payers.find(
            payer => payer.user_id === action.user_id
          );
        }
      } else {
        selectPayer = state.payers.find(
          payer => payer.user_id === action.user_id
        );
      }

      return { ...state, payer: selectPayer };
    default:
      return state;
  }
};

export default listPayerReducer;
