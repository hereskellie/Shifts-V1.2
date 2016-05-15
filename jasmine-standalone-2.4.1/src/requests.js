/*

* requests.js

* Requests JavaScript - connected to request.php & requests.php

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761
* @reference https://www.firebase.com/tutorial/#session/ad92jr6apzl

*

*/

 (function(){

 // CREATE A REFERENCE TO FIREBASE
  var ref = new Firebase('https://shiftsapp.firebaseio.com/');
  var requestRef = ref.child("request");


  // REGISTER DOM ELEMENTS
  var requestField = $('#requestInput');
  var nameField = $('#nameInput');
  var typeField = $('#typeInput');
  var requestList = $('#example-messages');

  // LISTEN FOR KEYPRESS EVENT
  requestField.keypress(function (e) { 
    if (e.keyCode == 13) {
      alert ("You have submitted a request");
      window.location.href = "request.php";
      //FIELD VALUES
      var username = nameField.val();
      var request = requestField.val();
      var type = typeField.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      requestRef.push({name:username, message:request, type:type});
      requestField.val('');
      
    }
  });

  // Add a callback that is triggered for each chat message.
  requestRef.limitToLast(100).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var request = data.message;
    var type = data.type;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var requestElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>");
    var typeElement = $("<li>")
    nameElement.text(username);
    typeElement.text(type);
    requestElement.text(request).prepend(nameElement);
    
    //ADD MESSAGE
    requestList.append(requestElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    //requestList[0].scrollTop = requestList[0].scrollHeight;
  });

  })