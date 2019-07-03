$(document).ready(function(){
  $("#click-button").on("click", function() {
    console.log("working");
    const track = $("#input-value").val().trim();
    let queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=5fb156e4bba3aaa310f7cfbd87f6cfdf&track=" + track + "&format=json";
    console.log("Track:", track);
    console.log("URL:", queryURL);
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response, "response");
  });
});
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
