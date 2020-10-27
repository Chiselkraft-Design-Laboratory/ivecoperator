import {
  SIGN_IN,
  CHECK_SIGN_IN_SUCCESS,
  FIRESTORE_CALL,
} from "../action-types/Actions";
import { Login } from "../../services/authService";

export const signIn = (username, password) => {
  return async (dispatch) => {
    const data = Login(username, password);
    var result = null;
    if (data) {
      await data.then((res) => (result = res));
    }

    dispatch({
      type: SIGN_IN,
      payload: result,
    });
  };
};

export const checkSigtnIn = () => {
  return async (dispatch) => {
    var token = localStorage.getItem("token");

    if (token) {
      dispatch({
        type: CHECK_SIGN_IN_SUCCESS,
        payload: token,
      });
    }
  };
};
