import Constant from "../constants/detailUserConstant";
import service from "../../services/detailUserService";

export const getDetailUser = user_id => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_DETAIL_CUSTOMER });

    service
      .getDetailUser(user_id)
      .then(response => {
        let { result, paginate } = response;
        let { user, checkin_list } = result;
        dispatch({
          type: Constant.GET_SUCCESS_DETAIL_CUSTOMER,
          paginate: paginate,
          user: user,
          checkin_list: checkin_list
        });
      })
      .catch(_error => {
        dispatch({ type: Constant.GET_FAILED_DETAIL_CUSTOMER });
      });
  };
};
