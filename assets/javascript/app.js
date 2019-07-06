
//Need to write click function that stores value
//from search bar and stores in varbiable
$(document).ready(function() {
  $("table").hide();
  
  $("#click-button").on("click", function() {
    $('table').empty();
    // console.log("working");
    const track = $("#input-value").val().trim();
    let queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=5fb156e4bba3aaa310f7cfbd87f6cfdf&track=" + track + "&limit=10&format=json";
    console.log("Track:", track);
    console.log("URL:", queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.results.trackmatches.track, "response");
      let songResults = [];
      for (let i = 0; i < response.results.trackmatches.track.length; i++) {
        songResults.push(response.results.trackmatches.track[i]);
        $("table").show();
        
        $('table').append('<tr><td>' + response.results.trackmatches.track[i].artist + '</td><td>' + response.results.trackmatches.track[i].name + '</td></tr>');
        // $('#songInfo').append('<td>' + response.results.trackmatches.track[i].name + '</td>');
      }
      console.log(songResults);
  });

});



$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response, "response");
     let artist = response.results.trackmatches.track[0].artist;
     let moreinfo = response.results.trackmatches.track[0].url;
     $("#artist").text("Artist Name: " + artist);
     $("#link").attr('href', moreinfo);
  });
  let youtubeurl = "https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&videoEmbeddable=true&q=" + track + "&type=video&videoCaption=closedCaption&key=AIzaSyBlbetWcuNrWDZnzRi44TuLhTyhxb7zgTs"
  
  $.ajax({
    url: youtubeurl,
    method: "GET"
  }).then(function(response) {
    console.log(response, "youtubeapi");
    let youtubevideo = response.items[0].id.videoId;
    console.log(youtubevideo);
    let videourl = 'https://www.youtube-nocookie.com/embed/' + youtubevideo;
    console.log(videourl);
    $('#videoplay').attr('src', videourl);
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
    $("#click-value").text("Songs FU'd! " + snapshot.val().clickCount);
    

    // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
    // Again we could have named errorObject anything we wanted.
  }, function(errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  });


})

