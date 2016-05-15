<!--

* requests.php

* Manager Requests interface - connected to requests.js

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761

*

*/

-->

<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="icon" href="favicon.ico">

    <title>Shifts</title>

    <!-- Scripts -->
    <script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
    <script src="ie-emulation-modes-warning.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="requests.js" type="text/javascript"></script>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">

    <!-- Navigation Bar -->
  <div id='cssmenu'>
<ul>
   <li><a href='roster.php'><span>Rosters</span></a></li>
   <li><a href='request.php'><span>Request</span></a></li>
   <li><a href='chat2.php'><span>Chat</span></a></li>
   <li><a href='manager.php'><span>Manager</span></a></li>
   <li><a href='register.php'><span>New User</span></a></li>
   <li><a href='newrosters.php'><span>New Roster</span></a></li>
   <li class='last'><a href='requests.php'><span>Employee Requests</span></a></li>
   <li class='pull-right' id='logout'><a href='index.php'><span>Log Out</span></a></li>
</ul>
</div>
  <!-- End of Navigation Bar -->
  <!-- Start of Requests -->
  </head>

  <body background="dark.jpg">

    <div class="container">

      
        <center><img src="company.png" width="750" height="100"></center>
        <h1 class="form-signin-heading"><font color="white"><center>Managers Requests</center></font></h1>
        <center>
    <div id="chatwindow"><font color="white">
                <ul class="example-chat-messages" id='example-messages'></font></ul>
    </div>
</center>
  <!-- End of Requests -->
  </body>
</html>