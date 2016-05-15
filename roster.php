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
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="rosterjava.js" type="text/javascript"></script>

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
            <li class='last'>
                <a href='manager.php'><span>Manager</span></a>
            </li>
            <li class='pull-right' id='logout'>
                <a href='index.php'><span>Log Out</span></a>
            </li>
        </ul>
</div>
  </head>

<body background="dark.jpg" onload="setCurrentDate();" >

<center><img src="company.png" width="750" height="100"></center>
        <h2 class="form-signin-heading"><font color="white"><center>Roster</h3></center></font></h2>
<center><div class="tg-wrap"><table class="roster">
  <tr>
    <th class="tg-jlrw">Name</th>
    <th class="tg-yw4l" id="date0"></th>
    <th class="tg-yw4l" id="date1"></th>
    <th class="tg-yw4l" id="date2"></th>
    <th class="tg-yw4l" id="date3"></th>
    <th class="tg-yw4l" id="date4"></th>
    <th class="tg-yw4l" id="date5"></th>
    <th class="tg-yw4l" id="date6"></th>
  </tr>
  <tr>
    <td class="tg-baqh" id="emp1"></td>
    <td class="tg-yw4l" id="emp1day1"></td>
    <td class="tg-yw4l" id="emp1day2"></td>
    <td class="tg-yw4l" id="emp1day3"></td>
    <td class="tg-yw4l" id="emp1day4"></td>
    <td class="tg-yw4l" id="emp1day5"></td>
    <td class="tg-yw4l" id="emp1day6"></td>
    <td class="tg-yw4l" id="emp1day7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="emp2"></td>
    <td class="tg-yw4l" id="emp2day1"></td>
    <td class="tg-yw4l" id="emp2day2"></td>
    <td class="tg-yw4l" id="emp2day3"></td>
    <td class="tg-yw4l" id="emp2day4"></td>
    <td class="tg-yw4l" id="emp2day5"></td>
    <td class="tg-yw4l" id="emp2day6"></td>
    <td class="tg-yw4l" id="emp2day7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="emp3"></td>
    <td class="tg-yw4l" id="emp3day1"></td>
    <td class="tg-yw4l" id="emp3day2"></td>
    <td class="tg-yw4l" id="emp3day3"></td>
    <td class="tg-yw4l" id="emp3day4"></td>
    <td class="tg-yw4l" id="emp3day5"></td>
    <td class="tg-yw4l" id="emp3day6"></td>
    <td class="tg-yw4l" id="emp3day7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="emp4"></td>
    <td class="tg-yw4l" id="emp4day1"></td>
    <td class="tg-yw4l" id="emp4day2"></td>
    <td class="tg-yw4l" id="emp4day3"></td>
    <td class="tg-yw4l" id="emp4day4"></td>
    <td class="tg-yw4l" id="emp4day5"></td>
    <td class="tg-yw4l" id="emp4day6"></td>
    <td class="tg-yw4l" id="emp4day7"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="emp5"></td>
    <td class="tg-yw4l" id="emp5day1"></td>
    <td class="tg-yw4l" id="emp5day2"></td>
    <td class="tg-yw4l" id="emp5day3"></td>
    <td class="tg-yw4l" id="emp5day4"></td>
    <td class="tg-yw4l" id="emp5day5"></td>
    <td class="tg-yw4l" id="emp5day6"></td>
    <td class="tg-yw4l" id="emp5day7"></td>
  </tr>
</table></div></center>

</br><center>
<input type="button" class="rosterclicks" onclick='retrievePreviousRoster();' value="Previous Week">
<input type="button" class="rosterclicks" onclick='retrieveNextRoster();' value="Next Week">
</center>
</body>
</html>