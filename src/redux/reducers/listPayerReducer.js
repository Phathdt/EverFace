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
      let { payers } = action;
      payers.forEach((payer, index) => (payer.id = index));

      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        payers: payers
      };
    case Constant.GET_FAILED_PAYER:
      return { ...state, isLoading: false };
    case Constant.SELECT_PAYER:
      const { payer } = state;
      let selectPayer = {};

      if (payer.id !== undefined) {
        if (payer.id === action.id) {
          selectPayer = {};
        } else {
          selectPayer = state.payers.find(payer => payer.id === action.id);
        }
      } else {
        selectPayer = state.payers.find(payer => payer.id === action.id);
      }
      let formData = Object.assign({}, selectPayer);

      return { ...state, payer: selectPayer, formData: formData };
    case Constant.RESET_FORM:
      return {
        ...state,
        payer: {}
      };
    case Constant.CREATE_USER_SUCCESS:
    case Constant.UPDATE_USER_SUCCESS:
      return {
        ...state,
        payer: {}
      };
    default:
      return state;
  }
};

export default listPayerReducer;
