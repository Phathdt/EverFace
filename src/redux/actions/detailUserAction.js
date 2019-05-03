import Constant from "../constants/detailUserConstant";
import service from "../../services/detailUserService";
import history from "../../history";

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

export const deleteCustomer = user_id => {
  return (dispatch, getState) => {
    service.deleteCustomer(user_id).then(response => {
      dispatch({ type: Constant.DELETE_SUCCESS_DETAIL_CUSTOMER_PAGE });

      history.push("/customers");
    });
  };
};

export const submitForm = () => {
  return (dispatch, getState) => {
    // let { id, image_base64, ...formData } = getState().form.formPayer.values;
    // if (formData.user_id !== "") {
    //   let { selectPayerIds, payers } = getState().listPayer;
    //   formData.image_base64 = payers
    //     .filter(payer => _.includes(selectPayerIds, payer.id))
    //     .map(payer => payer.image_base64);
    //   service
    //     .updateUser(formData)
    //     .then(response => {
    //       dispatch({ type: Constant.UPDATE_USER_SUCCESS });
    //       toast.success("Cập nhật thông tin thành công");
    //       dispatch(getListPayer());
    //     })
    //     .catch(error => {
    //       dispatch({ type: Constant.UPDATE_USER_FAILED });
    //     });
    // } else {
    //   formData.image_base64 = [image_base64];
    //   service
    //     .createUser(formData)
    //     .then(response => {
    //       dispatch({ type: Constant.CREATE_USER_SUCCESS });
    //       toast.success("Tạo thông tin thành công");
    //       dispatch(getListPayer());
    //     })
    //     .catch(error => {
    //       dispatch({ type: Constant.CREATE_USER_FAILED });
    //     });
    // }
  };
};
