import { SIGN_IN } from "../action-types/Actions";

const initialState = {
  Islogged: false,
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { isLogged: action.payload };

    default:
      return state;
  }
}

export default LoginReducer;
