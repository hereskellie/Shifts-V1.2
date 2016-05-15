<!--

* request.php

* Submitting a Request interface - connected to requests.js

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

    <!-- Scripts -->
    <script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
    <script src="ie-emulation-modes-warning.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="requests.js" type="text/javascript"></script>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">

</head>
<body background="dark.jpg">
    <div id='cssmenu'>
        <ul>
            <li>
                <a href='roster.php'><span>Rosters</span></a>
            </li>
            <li class='active'>
                <a href='request.php'><span>Requests</span></a>
            </li>
            <li>
                <a href='chat2.php'><span>Chat</span></a>
            </li>
            <li class='last'>
                <a href='manager.php'><span>Manager</span></a>
            </li>
            <li class='pull-right' id='logout'>
                <a href='index.php'><span>Log Out</span></a>
            </li>
        </ul>
    </div>
    <center>
        <img height="100" src="company.png" width="750">
    </center>
    <center>
    <h1>Submit a Request</h1>
    <div id="chatwindow">
            <label for="nameInput"><font color="white">Name:</font></label>
            <input id='nameInput' placeholder='enter your name' type='text'></br>
            <label><font color="white">Type of Request:</font></label> <input id=
            'typeInput' placeholder='Type a request' type='text'></br>
            <label><font color="white">Reason for Request:</font></label></br>
             <input id=
            'requestInput' placeholder='Type a message and then press enter' type='text' style="height:200px;width:400px;font-size:14pt;">
    </div>

</body>
</html>