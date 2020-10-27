import {Firestore} from '../firebase/config'


export  function getFirestore()
{
    var Data=[]

    return Firestore.collection("History").where("operator", "==", "harshji")
    // .orderBy('position')
    .get()
    .then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        var data = doc.data()

        data.isIterated = false
        // console.log(doc.id, " => ", doc.data());

        Data.push(data)

    //  return Data
      });

      return Data
    


    })
    .catch((error) => {
      console.log("Error getting documents from firestore: ", error);
    });

}
