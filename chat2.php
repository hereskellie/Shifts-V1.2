<!--

* Chat2.php

* Chat interface - connected to chatjava.js

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
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link href="favicon.ico" rel="icon">
    <title>Shifts</title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">
    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">
    
    <!-- Scripts -->
    <script src="ie-emulation-modes-warning.js"></script>
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="chatjava.js" type="text/javascript"></script>
    
</head>
<body background="dark.jpg">

    <!-- Navigation Bar -->
    <div id='cssmenu'>
        <ul>
            <li>
                <a href='roster.php'><span>Rosters</span></a>
            </li>
            <li>
                <a href='request.php'><span>Request</span></a>
            </li>
            <li class='active'>
                <a href='chat2.php'><span>Chat</span></a>
            </li>
            <li class='active'>
                <a href='search.php'><span>Search</span></a>
            </li>
            <li class='last'>
                <a href='manager.php'><span>Manager</span></a>
            </li>
            <li class='pull-right' id='logout'>
                <a href='index.php'><span>Log Out</span></a>
            </li>
        </ul>
    </div>
    <!-- End of Navigation Bar -->
    <!-- Start of Chat Window -->
    <center>
        <img height="100" src="company.png" width="750">
    </center>
    <center>
        <h1><font color="white">Message Members of Staff</font></h1>
        <div id="chatwindow">
            <label for="nameInput"><font color="white">Name:</font></label>
            <input id='nameInput' placeholder='enter your name' type='text'>
            <div id="messagewindow">
                <ul class="example-chat-messages" id='example-messages'></ul>
            </div><label><font color="white">Message:</font></label> <input id=
            'messageInput' placeholder='Type a message...' type='text'>
        </div>
    </center>
    <!-- End of Chat Window -->
    <script src="ie10-viewport-bug-workaround.js"></script>
</body>
</html>