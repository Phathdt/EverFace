import authConstant from "../constants/authConstant";
import authService from "../../services/authService";

export const login = account => {
  return (dispatch, getState) => {
    dispatch({ type: authConstant.LOGIN });

    authService
      .login(account)
      .then(response => {
        dispatch({ type: authConstant.LOGIN_SUCCESS, user: response.user });
      })
      .catch(error => {
        dispatch({ type: authConstant.LOGIN_FAIL });
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    authService.logout();

    dispatch({ type: authConstant.LOG_OUT });
  };
};

export const getCurrentUser = () => {
  return (dispatch, getState) => {
    authService.getCurrentUser().then(user => {
      if (user) {
        dispatch({ type: authConstant.GET_CURRENT_USER, user: user });
      }
    });
  };
};
