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
    <script src="ie-emulation-modes-warning.js"></script>
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
    <script src="https://static.firebase.com/v0/firebase.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="searchjava.js" type="text/javascript"></script>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">

    <div id='cssmenu'>
<ul>
            <li class='active'>
                <a href='roster.php'><span>Rosters</span></a>
            </li>
            <li>
                <a href='request.php'><span>Requests</span></a>
            </li>
            <li>
                <a href='chat2.php'><span>Chat</span></a>
            </li>
            <li>
                <a href='manager.php'><span>Manager</span></a>
            </li>
            <li class='last'>
                <a href='search.php'><span>Search</span></a>
            </li>
            <li class='pull-right' id='logout'>
                <a href='index.php'><span>Log Out</span></a>
            </li>
        </ul>
</div>
  </head>

<body background="dark.jpg">
<center>
<h3><font color="white">Find person by email</font></h3>


<h5><font color="white">Search by email</font></h5>
<form>
  <input type="text" placeholder="admin@shiftsapp.com..." />
  <button>search</button>
  <p></p>
</form>

<h3><font color="white">Find day of hours</font></h3>

<h5><font color="white">Search by date</font></h5>
<form>
  <input type="date" />
  <button>search</button>
</form>

<h3><font color="white">Find day of name of employee</font></h3>


<h5><font color="white">Search by name</font></h5>
<form>
  <input type="text" placeholder="Kellie Hughes" />
  <button>search</button>
</form>

<pre></pre>


</center>
</body>
</html>