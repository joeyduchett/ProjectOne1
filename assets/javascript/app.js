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
