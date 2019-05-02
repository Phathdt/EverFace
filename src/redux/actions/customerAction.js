import Constant from "../constants/customerConstant";
import service from "../../services/customerService";
import { toast } from "react-toastify";

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
          customers: response.result,
          paginate: response.paginate
        });
      })
      .catch(_error => {
        dispatch({ type: Constant.GET_FAILED_CUSTOMER_PAGE });
      });
  };
};

export const deleteCustomer = user_id => {
  return (dispatch, getState) => {
    service
      .deleteCustomer(user_id)
      .then(response => {
        dispatch({ type: Constant.DELETE_SUCCESS_CUSTOMER_PAGE });

        toast.success("Xoá khách hàng thành công");

        dispatch(getListCustomer());
      })
      .catch(_error => {
        dispatch({ type: Constant.DELETE_FAILED_CUSTOMER_PAGE });
      });
  };
};
