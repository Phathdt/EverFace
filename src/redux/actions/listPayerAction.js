import Constant from "../constants/listPayerConstant";
import service from "../../services/listPayerService";

export const getListPayer = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_PAYER });

    service
      .getListPayer()
      .then(response => {
        dispatch({ type: Constant.GET_SUCCESS_PAYER, payers: response });
      })
      .catch(error => {
        dispatch({ type: Constant.GET_FAILED_PAYER });
      });
  };
};

export const selectPayer = id => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.SELECT_PAYER, id: id });
  };
};

export const updateFormData = (key, value) => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.UPDATE_FORM_DATA, key: key, value: value });
  };
};
