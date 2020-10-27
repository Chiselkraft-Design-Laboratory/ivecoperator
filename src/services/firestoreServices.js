import {Firestore} from '../firebase/config'


export  function getFirestore()
{
    var Data=[]
    var dateObj =new Date()
    dateObj.setDate(dateObj.getDate()-70);

    // var timestamp =dateObj.getTime()


    console.log(dateObj)


    // console.log(timestamp)

   


    try{
    return Firestore.collection("History").where("operator", "==", "harshji").where("ride", "==", true).where("timestamp" ,">" ,dateObj).orderBy("timestamp","desc")
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

      console.log(Data)

      return Data
    


    })
    .catch((error) => {
      console.log("Error getting documents from firestore: ", error);
    });
} 
catch(e)
{ 
    console.log(e)
}

}


export function parseData(data)
{

  
//     var totalEarnings=0
//     var totalDistance=0
//     var dataObj={}
// data.map((val,index)=>
// {
//    console.log(val)
// //    totalEarnings += parseInt(val.Amount) 
// //    totalDistance += parseFloat(val.distanceTravelled)

// })

// dataObj.totalEarnings = totalEarnings
// dataObj.totalTrips=data.length-1
var flag = 0
var earningJson = []
var distanceJson = []
var tripJson = []

for (var i = 0; i < data.length - 1; i++) {

    var totaldistance = 0
    var totalearning = 0
    var trips = 1
    for (var j = i + 1; j < data.length; j++) {


      if (data[i].timestamp.toDate().toString().substr(0, 16) == data[j].timestamp.toDate().toString().substr(0, 16) && data[i].isIterated == false) {

        console.log(data[i].timestamp.toDate().toString().substr(0, 16))
        console.log(data[j].timestamp.toDate().toString().substr(0, 16))


        data[j].isIterated = true
        totaldistance = data[j].distaceTravelled + totaldistance
      console.log(data[j])
        var earning = parseInt(data[j].Amount)
         console.log(earning,'earning')
        var totalearning = totalearning + data[j].distaceTravelled + earning
        trips++
      }
    }
    if (data[i].isIterated == false) {
      var Distance = {}
      var earning = {}
      var trip = {}
      Distance.x = flag
      totaldistance = data[i].distaceTravelled + totaldistance
      Distance.y = totaldistance
      distanceJson.push(Distance)

    
      var earningI = parseInt(data[i].Amount)
      console.log(earningI,'earning 1')

      totalearning = earningI + totalearning

      earning.x = flag
      earning.y = totalearning
      earningJson.push(earning)
      trip.x = flag;
      trip.y = trips;
      tripJson.push(trip)

      flag++

    }
}

console.log(earningJson)
console.log(distanceJson)
console.log(tripJson)

}
