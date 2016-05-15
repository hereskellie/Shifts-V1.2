/*

* userauth.js

* Starting interface javascript - connected to userauth.js

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761
* @reference http://codepen.io/Angelina_Lapteva/pen/zxmZMv

*

*/

(function(){
  
  
  console.log("page is ready");
  

  
  ////CREATE FIREBASE CONNECTION
  var ref = new Firebase('https://shiftsapp.firebaseio.com/');
  /// listen the data from our firebase "function(snapshot)" here our call back function, snapshot is incapsulation of our data
  ref.on("value",function(snapshot){
    
    console.log( snapshot.val() );
    
    
    data=snapshot.val();
    
  })
  
  
  //////////////////// registration stuff/////////////////////
  // For the Login //
  $('#login').submit(function(event){ 
  
    /// disable register button
        var $form = $(this);
    
    $form.find("#registerForm").prop('disabled', true);
    var email = $form.find("#loginInput").val();
    var pw = $form.find("#pwField").val();
    register(email,pw);
    return false;
  });// end of register submit
  // For the Manager Login //
  $('#managerlogin').submit(function(event){ 
  
    /// disable register button
        var $form = $(this);
    
    // disable Submit button
    // prop = properties of a form and one of the properties is disable
    
    $form.find("#registerForm").prop('disabled', true);
    var email = $form.find("#loginInput").val();
    var pw = $form.find("#pwField").val();
    register(email,pw);
    return false;
  });// end of register submit
  
  // For the Login //
  $('#finallogin').submit(function(event) {
    
    var $form = $(this);
    $form.find('#finalloginForm').prop('disabled', true);
    
    ////get the values for login and pasword textboxes
    var loginEmail = $('#finalloginInput').val();
    var pw = $('#finalpwField').val();
    
    console.log(loginEmail, pw);
    
    login(loginEmail,pw);
    
    return false;
                       
  });


// For the Manager Login //
  $('#finalmanagerlogin').submit(function(event) {
    
    var $form = $(this);
    $form.find('#finalmanagerloginForm').prop('disabled', true);
    
    ////get the values for login and pasword textboxes
    var loginEmail = $('#finalmanagerloginInput').val();
    var pw = $('#finalmanagerpwField').val();
    
    console.log(loginEmail, pw);
    
    managerlogin(loginEmail,pw);
    
    return false;
                       
  });
  
  //// logout cick handler button
  $('#logout').click(function(event){
    
    console.log("going to logout!");
    logout();
  })
  
  
  //////////log out from firebase registry////////
  function logout(){
     var reg = new Firebase ("https://shiftsapp.firebaseio.com");
    
    reg.unauth();
    
    window.location.href = "index.php";
  }

  // for the login //
  function login(email, password) {
    console.log("Registering with"+email+"  "+password);
    var reg = new Firebase ("https://shiftsapp.firebaseio.com");
    
    reg.authWithPassword({
      email: email,
      password: password
    }, function(error, user){
      if(error){
        console.log(error);
        if(error.code == "INVALID_USER"){
					alert("Not a valid login")
        }
        if(error.code == "INVALID_PASSWORD"){
          alert("Not a valid password");
        }
        alert(error.message);
        
      }else{
        alert("Logged in with "+user.uid);
        window.location.href = "roster.php";
      }
    })
    
  }

  // for the manager login //
  function managerlogin(email, password) {
    console.log("Registering with"+email+"  "+password);
    var reg = new Firebase ("https://shiftsapp.firebaseio.com");
    
    reg.authWithPassword({
      email: email,
      password: password
    }, function(error, user){
      if(error){
        console.log(error);
        if(error.code == "INVALID_USER"){
          alert("Not a valid login")
        }
        if(error.code == "INVALID_PASSWORD"){
          alert("Not a valid password");
        }
        alert(error.message);
        
      }else{
        alert("Logged in with "+user.uid);
        window.location.href = "newrosters.php";
      }
    })
    
  }
  
  
  
  
  ////// register a new user in the firebase///////////////
  
  function register(email, password){
    console.log("Registered a new User");
  //  console.log(email,password);
    var reg = new Firebase ("https://shiftsapp.firebaseio.com");
    reg.createUser ({
      email: email,
      password: password
      
    }, function(error, userData) {
      if (error) {
        if(error.code)
        alert ("some kind error");
      } else {
      alert ("you registered"+ userData.uid);  
      }
    })
    
    
  }
  
  /////// Detect the authication state
  var reg = new Firebase("https://shiftsapp.firebaseio.com");
  reg.onAuth(function(authData){
     console.log("info on authentication");
    if(authData){
      // you are logged in
      console.log("you are logged in");
    }else {
      //you are not logged in
       console.log("you are not logged in"); 
    }
  }) 
  
  })