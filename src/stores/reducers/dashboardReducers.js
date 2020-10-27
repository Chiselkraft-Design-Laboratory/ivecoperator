import {FIRESTORE_CALL} from "../action-types/Actions";

const initialState = {
 
};

function dashboardReducers(state = initialState, action) {
  switch (action.type) {
    case FIRESTORE_CALL:
      return { data: action.payload };

    

    default:
      return state;
  }
}

export default dashboardReducers;
