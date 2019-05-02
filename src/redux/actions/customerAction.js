import Constant from "../constants/customerConstant";
import service from "../../services/customerService";

export const getListCustomer = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_CUSTOMER_PAGE });
    let { page, per_page } = getState().customer;
    let search = "";
    try {
      search = getState().form.formSearch.values.search;
    } catch (error) {}

    service
      .getlistCustomer(search, page, per_page)
      .then(response => {
        dispatch({
          type: Constant.GET_SUCCESS_CUSTOMER_PAGE,
          customers: response
        });
      })
      .catch(_error => {
        dispatch({ type: Constant.GET_FAILED_CUSTOMER_PAGE });
      });
  };
};
