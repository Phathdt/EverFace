import Constant from "../constants/listPayerConstant";

const initialState = {
  isLoaded: false,
  isLoading: false,
  payers: [],
  payer: {},
  formData: {}
};

const listPayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.START_GET_PAYER:
      return { ...state, isLoading: true, payers: [] };
    case Constant.GET_SUCCESS_PAYER:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        payers: action.payers
      };
    case Constant.GET_FAILED_PAYER:
      return { ...state, isLoading: false };
    case Constant.SELECT_PAYER:
      const { payer } = state;
      let selectPayer = {};

      if (payer.user_id) {
        if (payer.user_id === action.user_id) {
          selectPayer = {};
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
      let formData = Object.assign({}, selectPayer);

      return { ...state, payer: selectPayer, formData: formData };
    case Constant.UPDATE_FORM_DATA:
      let data = state.formData;
      data[action.key] = action.value;
      return { ...state, formData: data };
    default:
      return state;
  }
};

export default listPayerReducer;
