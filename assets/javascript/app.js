
//Need to write click function that stores value
//from search bar and stores in varbiable
$(document).ready(function() {
  $("table").hide();
  const gifs = ["https://media.giphy.com/media/c20UV66B7zCWA/giphy.gif",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://images.halloweencostumes.com/products/53226/1-2/kids-bearded-dragon-costume-update1.jpg",
  "https://data.whicdn.com/images/62712168/large.png"
  ]
  
  $("#click-button").on("click", function() {
    event.preventDefault();
    let randoN = Math.floor(Math.random()*5);
    let loadgif = gifs[randoN];
    $('#load').attr('src', loadgif);

    console.log(loadgif);


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
  let youtubeurl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&videoCategoryId=10&videoEmbeddable=true&q=" + track + "&type=video&videoCaption=closedCaption&key=AIzaSyBlbetWcuNrWDZnzRi44TuLhTyhxb7zgTs"
  
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
  $("#clicks").text("Songs FU'd! " + snapshot.val().clickCount);
  
  
  // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
  // Again we could have named errorObject anything we wanted.
}, function(errorObject) {
  
  // In case of error this will print the error
  console.log("The read failed: " + errorObject.code);
});


});




