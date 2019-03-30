var config = {
    apiKey: "AIzaSyA554yAMnE6vqga9B8MAPrQgfymY1acgw0",
    authDomain: "tutorial-b11b1.firebaseapp.com",
    databaseURL: "https://tutorial-b11b1.firebaseio.com",
    projectId: "tutorial-b11b1",
    storageBucket: "tutorial-b11b1.appspot.com",
    messagingSenderId: "101401369327"
 };
 
 firebase.initializeApp(config);
 
 var db = firebase.database();
 var messageRef = db.ref("/message");
 
 $("#send-button").click(function () {
    var message = $("#message-text").val();
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        text: message
    });
 })
 
 messageRef.on('child_added', function (data) {
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
    var message = data.val().text;
    var messageElement = $("<p>").text(message);
    $("#message-container").append(messageElement);
 });