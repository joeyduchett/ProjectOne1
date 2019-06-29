<<<<<<< HEAD
const firebaseConfig = {
    apiKey: "AIzaSyB7ySPEV0gp6qFYWi0v_daSWIaAQbpOuh8",
    authDomain: "newproject-be903.firebaseapp.com",
    databaseURL: "https://newproject-be903.firebaseio.com",
    projectId: "newproject-be903",
    storageBucket: "newproject-be903.appspot.com",
    messagingSenderId: "213280593884",
    appId: "1:213280593884:web:36cc06648062fc8a"
};
firebase.initializeApp(firebaseConfig);


const database = firebase.database();
let clickCounter = 0;

database.ref().set({
  clickCount: clickCounter
});
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());


  clickCounter = snapshot.val().clickCount;

  console.log(clickCounter);


  $("#clicks").text(clickCounter);
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});



$("#submit").on("click", function() {
  clickCounter++;
  console.log(clickCounter);
  database.ref().set({
    clickCount: clickCounter
  });

});
=======
$(document).ready(function(){
const config = {
    apiKey: "AIzaSyCM4JX2RT_DHRCdXGPZAK_AdbvR8AFnt7I",
    authDomain: "the-one-d42f5.firebaseapp.com",
    databaseURL: "https://the-one-d42f5.firebaseio.com",
    projectId: "the-one-d42f5",
    storageBucket: "the-one-d42f5.appspot.com",
    messagingSenderId: "18690539296",
    appId: "1:18690539296:web:e79c824b8074e9db"
  };

  firebase.initializeApp(config);

  // VARIABLES
  // --------------------------------------------------------------------------------

  // Get a reference to the database service
  const database = firebase.database();

  // Setting initial value of our click counter variable to 0
  let clickCounter = 0;

  // FUNCTIONS + EVENTS
  // --------------------------------------------------------------------------------

  // On Click of Button
  $("#click-button").on("click", function() {
    console.log("click");
    // Add to clickCounter
    clickCounter++;

    //  Store Click Data to Firebase in a JSON property called clickCount
    // Note how we are using the Firebase .set() method
    database.ref().set({
      clickCount: clickCounter
    });
  });

  // MAIN PROCESS + INITIAL CODE
  // --------------------------------------------------------------------------------

  // Using .on("value", function(snapshot)) syntax will retrieve the data
  // from the database (both initially and every time something changes)
  // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
  database.ref().on("value", function(snapshot) {

    // Then we console.log the value of snapshot
    console.log(snapshot.val());

    // Update the clickCounter variable with data from the database.
    clickCounter = snapshot.val().clickCount;

    // Then we change the html associated with the number.
    $("#click-value").text(snapshot.val().clickCount);
    

    // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
    // Again we could have named errorObject anything we wanted.
  }, function(errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  });
})
>>>>>>> c4d2e1a3579e2a6dcd70235a9f00f89911a27654
