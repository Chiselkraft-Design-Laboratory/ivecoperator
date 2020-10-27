import { SIGN_IN ,CHECK_SIGN_IN_SUCCESS} from "../action-types/Actions";

const initialState = {
  Islogged: false,
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { isLogged: action.payload };

      case CHECK_SIGN_IN_SUCCESS:
        return { isLogged: true};

    default:
      return state;
  }
}

export default LoginReducer;
