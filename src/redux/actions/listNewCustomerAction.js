import Constant from "../constants/listNewCustomerConstant";
import service from "../../services/listNewCustomerUserService";

export const getListNewCustomer = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_CUSTOMER });

    service
      .getListNewCustomer()
      .then(response => {
        dispatch({ type: Constant.GET_SUCCESS_CUSTOMER, customers: response });
      })
      .catch(_error => {
        dispatch({ type: Constant.GET_FAILED_CUSTOMER });
      });
  };
};

export const callCustomer = id => {
  return (dispatch, _getState) => {
    dispatch({ type: Constant.START_CALL_CUSTOMER });

    service
      .callCustomer(id)
      .then(_response => {
        dispatch({ type: Constant.CALL_SUCCESS_CUSTOMER });
      })
      .catch(_error => {
        dispatch({ type: Constant.CALL_FAILED_CUSTOMER });
      });
  };
};
