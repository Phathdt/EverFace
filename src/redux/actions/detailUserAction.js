import Constant from "../constants/detailUserConstant";
import service from "../../services/detailUserService";
import history from "../../history";
import { toast } from "react-toastify";

export const getDetailUser = user_id => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.START_GET_DETAIL_CUSTOMER });
    let { current_page, per_page } = getState().detailUser;

    service
      .getDetailUser(user_id, current_page, per_page)
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

export const deleteCustomer = user_id => {
  return (dispatch, getState) => {
    service.deleteCustomer(user_id).then(response => {
      dispatch({ type: Constant.DELETE_SUCCESS_DETAIL_CUSTOMER_PAGE });

      toast.success("Xoá khách hàng thành công");

      history.push("/customers");
    });
  };
};

export const changeAvatar = (user_id, image_url) => {
  return (dispatch, getState) => {
    service
      .changeAvatar(user_id, image_url)
      .then(response => {
        dispatch({ type: Constant.CHANGE_AVATAR_USER_SUCCESS });

        toast.success("Chọn ảnh đại diện thành công");

        let { user_id } = getState().detailUser.user;

        dispatch(getDetailUser(user_id));
      })
      .catch(_error => {
        dispatch({ type: Constant.CHANGE_AVATAR_USER_FAILED });
      });
  };
};

export const deleteAvatar = (user_id, image_url) => {
  return (dispatch, getState) => {
    service
      .deleteAvatar(user_id, image_url)
      .then(response => {
        dispatch({ type: Constant.DELETE_AVATAR_USER_SUCCESS });

        toast.success("Xoá ảnh đại diện thành công");

        let { user_id } = getState().detailUser.user;

        dispatch(getDetailUser(user_id));
      })
      .catch(_error => {
        dispatch({ type: Constant.DELETE_AVATAR_USER_FAILED });
      });
  };
};

export const changePage = page => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.CHANGE_PAGE_DETAIL_USER_PAGE, page: page });
    let { user_id } = getState().detailUser.user;

    dispatch(getDetailUser(user_id));
  };
};

export const submitForm = () => {
  return (dispatch, getState) => {
    let { ...formData } = getState().form.formDetailUser.values;

    formData.image_base64 = [formData.avatar];

    service
      .updateUser(formData)
      .then(response => {
        dispatch({ type: Constant.UPDATE_DETAIL_USER_SUCCESS });

        toast.success("Cập nhật thông tin thành công");

        let { user_id } = getState().detailUser.user;

        dispatch(getDetailUser(user_id));
      })
      .catch(error => {
        dispatch({ type: Constant.UPDATE_DETAIL_USER_FAILED });
      });
  };
};
