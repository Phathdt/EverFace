import Constant from "../constants/listNewCustomerConstant";
import service from "../../services/listNewCustomerUserService";

export const getListNewCustomer = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_CUSTOMER });

    service
      .getListNewCustomer()
      .then(response => {
        dispatch({ type: Constant.GET_SUCCESS, customers: response });
      })
      .catch(error => {
        dispatch({ type: Constant.GET_FAILED });
      });
  };
};

export const callCustomer = id => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_CALL });

    service
      .callCustomer(id)
      .then(response => {
        dispatch({ type: Constant.CALL_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: Constant.CALL_FAILED });
      });
  };
};
