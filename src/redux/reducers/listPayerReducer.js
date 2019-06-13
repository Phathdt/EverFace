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
      payers.forEach((payer, index) => {
        payer.id = index;

        if (payer.score !== "") {
          payer.score = Math.round(parseFloat(payer.score) * 100) / 100;
        }
      });

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
        // TH blank user
        if (selectPayer.user_id === "") {
          if (_.includes(selectPayerIds, selectPayer.id)) {
            selectPayerIds = selectPayerIds.filter(id => id !== selectPayer.id);
          } else {
            selectPayerIds = [...selectPayerIds, selectPayer.id];
          }
        } // TH exist user
        else {
          if (_.includes(selectPayerIds, selectPayer.id)) {
            selectPayerIds = selectPayerIds.filter(id => id !== selectPayer.id);
          } else {
            let firstselectPayerId = selectPayerIds[0];

            let firstPayer = state.payers.find(
              payer => payer.id === firstselectPayerId
            );

            if (firstPayer.user_id === "") {
              selectPayerIds.unshift(selectPayer.id);
            } else {
              if (firstPayer.user_id === selectPayer.user_id) {
                selectPayerIds = [...selectPayerIds, selectPayer.id];
              } else {
                let listPayerIds = state.payers
                  .filter(payer => payer.user_id === firstPayer.user_id)
                  .map(payer => payer.id);

                selectPayerIds = selectPayerIds.filter(
                  payerId => !_.includes(listPayerIds, payerId)
                );

                selectPayerIds = [selectPayer.id, ...selectPayerIds];
              }
            }
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
