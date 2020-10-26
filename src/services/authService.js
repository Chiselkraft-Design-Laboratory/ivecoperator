import { Auth } from "firebase/config";

export function Login(email, password) {
  // Auth.createUserWithEmailAndPassword(email, password)
  // .then((res)=>
  // {
  //     console.log(res)
  // })
  // .catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;

  //     console.log(errorMessage)
  //     // ...
  //   });

  try {
    return Auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        const token = Object.entries(res.user)[5][1].b;
        //set token to localStorage
        localStorage.setItem("token", token);
        console.log(res);
        return true;
      })

      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("bad credentials", errorMessage);
        return false;
        // ...
      });
  } catch (e) {
    console.log(e);
  }
}
