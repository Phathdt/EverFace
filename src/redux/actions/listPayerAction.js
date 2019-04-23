import Constant from "../constants/listPayerConstant";
import service from "../../services/listPayerService";

export const getListPayer = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_PAYER });

    service
      .getListPayer()
      .then(response => {
        dispatch({ type: Constant.GET_SUCCESS, payers: response });
      })
      .catch(_error => {
        dispatch({ type: Constant.GET_FAILED });
      });
  };
};

export const selectPayer = user_id => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.SELECT_PAYER, user_id: user_id });
  };
};
