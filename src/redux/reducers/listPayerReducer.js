import Constant from "../constants/listPayerConstant";
import _ from "lodash";

const initialState = {
  isLoaded: false,
  isLoading: false,
  payers: [],
  selectPayerIds: []
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
      let { selectPayerIds } = state;
      let selectPayer = state.payers.find(payer => payer.id === action.id);
      if (_.isEmpty(selectPayerIds)) {
        selectPayerIds.push(selectPayer.id);
      } else {
        if (selectPayer.user_id !== "") {
          if (selectPayer.id === selectPayerIds[0]) {
            selectPayerIds = [];
          } else {
            selectPayerIds = [selectPayer.id];
          }
        } else {
          let currentPayer = state.payers.find(
            payer => payer.id === selectPayerIds[0]
          );
          if (currentPayer.user_id === "") {
            selectPayerIds = [selectPayer.id];
          } else {
            selectPayerIds.push(selectPayer.id);
          }
        }
      }

      return { ...state, selectPayerIds: [...selectPayerIds] };
    case Constant.RESET_FORM:
      return {
        ...state,
        selectPayerIds: []
      };
    case Constant.CREATE_USER_SUCCESS:
    case Constant.UPDATE_USER_SUCCESS:
      return {
        ...state,
        selectPayerIds: []
      };
    default:
      return state;
  }
};

export default listPayerReducer;
