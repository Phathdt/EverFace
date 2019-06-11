import Constant from "../constants/listPayerConstant";
import service from "../../services/listPayerService";
import { toast } from "react-toastify";
import _ from "lodash";

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
    let {
      id,
      image_base64,
      embedding,
      ...formData
    } = getState().form.formPayer.values;

    let { selectPayerIds } = getState().listPayer;

    let firstPayer = getState().listPayer.payers.find(
      payer => payer.id === selectPayerIds[0]
    );

    if (firstPayer.user_id !== "") {
      let { selectPayerIds, payers } = getState().listPayer;
      formData.image_base64 = payers
        .filter(payer => _.includes(selectPayerIds, payer.id))
        .map(payer => payer.image_base64);

      formData.embedding = payers
        .filter(payer => _.includes(selectPayerIds, payer.id))
        .map(payer => payer.embedding);

      service
        .updateUser(formData)
        .then(_response => {
          dispatch({ type: Constant.UPDATE_USER_SUCCESS });
          toast.success("Cập nhật thông tin thành công");
          dispatch(getListPayer());
        })
        .catch(error => {
          dispatch({ type: Constant.UPDATE_USER_FAILED });
        });
    } else {
      formData.image_base64 = [image_base64];
      formData.embedding = [embedding];

      service
        .createUser(formData)
        .then(_response => {
          dispatch({ type: Constant.CREATE_USER_SUCCESS });
          toast.success("Tạo thông tin thành công");
          dispatch(getListPayer());
        })
        .catch(error => {
          dispatch({ type: Constant.CREATE_USER_FAILED });
        });
    }
  };
};
