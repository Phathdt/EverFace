import Constant from "../constants/customerConstant";
import service from "../../services/customerService";

export const getListCustomer = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_CUSTOMER });
    let { page, search, per_page } = getState().customer;

    service
      .getListCustomer(page, search, per_page)
      .then(response => {
        dispatch({ type: Constant.GET_SUCCESS_CUSTOMER, customers: response });
      })
      .catch(_error => {
        dispatch({ type: Constant.GET_FAILED_CUSTOMER });
      });
  };
};
