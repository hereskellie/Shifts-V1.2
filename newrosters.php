<!--

* newrosters.php

* New Roster Submission interface 

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

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">
    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">

    <script src="ie-emulation-modes-warning.js"></script>
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="rosterjava.js" type="text/javascript"></script>

  <div id='cssmenu'>
<ul>
   <li class='active'><a href='roster.php'><span>Rosters</span></a></li>
   <li><a href='request.php'><span>Request</span></a></li>
   <li><a href='chat2.php'><span>Chat</span></a></li>
   <li><a href='search.php'><span>Search</span></a></li>
   <li><a href='manager.php'><span>Manager</span></a></li>
   <li><a href='register.php'><span>New User</span></a></li>
   <li><a href='newrosters.php'><span>New Roster</span></a></li>
   <li class='last'><a href='requests.php'><span>Employee Requests</span></a></li>
   <li class='pull-right' id='logout'><a href='index.php'><span>Log Out</span></a></li>
</ul>
</div>
  </head>

  <body background="dark.jpg">

    <div class="container">

      
        <center><img src="company.png" width="750" height="100"></center>
        <h2 class="form-signin-heading"><font color="white"><center>New Roster</center></font></h2>
<center><div class="tg-wrap"><table class="roster">
  <tr>
    <th class="tg-jlrw">Name</th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date1Input"></th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date2Input"></th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date3Input"></th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date4Input"></th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date5Input"></th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date6Input"></th>
    <th class="tg-yw4l"><input type="date" placeholder="enter date" class="rosterform" id="date7Input"></th>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp1"></td>
    <td class="tg-yw4l"><center><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input1"></center></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input6"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp1Input7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input1"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input6"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp2Input7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input1"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input6"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp3Input7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input1"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input6"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp4Input7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input1"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input6"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter shift" class="rosterform" id="emp5Input7"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Type Enter</td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter1"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter2"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter3"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter4"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter5"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter6"></td>
    <td class="tg-yw4l"><input type="text" placeholder="enter" class="rosterform" id="enter7"></td>
  </tr>
</table>

</div></center>

  </body>
</html>