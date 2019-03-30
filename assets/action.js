var config = {
    apiKey: "AIzaSyA554yAMnE6vqga9B8MAPrQgfymY1acgw0",
    authDomain: "tutorial-b11b1.firebaseapp.com",
    databaseURL: "https://tutorial-b11b1.firebaseio.com",
    projectId: "tutorial-b11b1",
    storageBucket: "tutorial-b11b1.appspot.com",
    messagingSenderId: "101401369327"
 };
 
 firebase.initializeApp(config);
 
 var database = firebase.database();
 var name = "";
 var startDate = "";
 var monthlyRate = "";

$("#run-search").on("click", function(event) {
    event.preventDefault();

    name = $("#employee-name").val().trim();
    startDate = $("#start-year").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();

    database.ref().push( {
        name: name,
        startDate: startDate,
        monthlyRate: monthlyRate
    });
});

 database.ref().on("value", function(snapshot) {
     if ()
 })
