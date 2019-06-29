//Need to write click function that stores value
//from search bar and stores in varbiable
$(document).ready(function() {


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

});