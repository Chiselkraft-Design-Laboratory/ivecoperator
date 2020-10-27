import {getFirestore} from '../../services/firestoreServices'
import { FIRESTORE_CALL} from "../action-types/Actions";




export const firestoreCall = () => {
    return async (dispatch) => {

   
     const data =  getFirestore()

     var result = null;
      if (data) {
        await data.then((res) => (result=res));

        console.log("result",result)

        
  
        dispatch({
          type: FIRESTORE_CALL,
          payload: result,
        });
      }
  
  
  
    };
  };