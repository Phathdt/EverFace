import Constant from "../constants/listPayerConstant";
import service from "../../services/listPayerService";
import { toast } from "react-toastify";

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

export const resetForm = () => {
  return (dispatch, getState) => {
    dispatch({ type: Constant.RESET_FORM });
  };
};

export const submitForm = () => {
  return (dispatch, getState) => {
    let { values } = getState().form.formPayer;
    if (values.user_id !== "") {
      service
        .updateUser(values)
        .then(response => {
          dispatch({ type: Constant.UPDATE_USER_SUCCESS });
          toast.success("Cập nhật thông tin thành công");
        })
        .catch(error => {
          dispatch({ type: Constant.UPDATE_USER_FAILED });
        });
    } else {
      service
        .createUser(values)
        .then(response => {
          dispatch({ type: Constant.CREATE_USER_SUCCESS });
          toast.success("Tạo thông tin thành công");
        })
        .catch(error => {
          dispatch({ type: Constant.CREATE_USER_FAILED });
        });
    }
  };
};
