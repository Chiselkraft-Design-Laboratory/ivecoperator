import { SIGN_IN } from "../action-types/Actions";
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
