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

});