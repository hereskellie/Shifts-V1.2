<!--

* register.php

* Registration of New Users interface - connected to userauth.js

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761
* @reference http://codepen.io/Angelina_Lapteva/pen/zxmZMv

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

    <!-- Scripts -->
    <script src="ie-emulation-modes-warning.js"></script>
    <script src="https://cdn.firebase.com/js/client/2.2.0/firebase.js"></script>
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script type="text/javascript" src="userauth.js"></script>

  </head>

  <body background="dark.jpg">

  </br>
</br>
</br>
</br>
</br>
</br>
  <center>
<table border="0">
<tr>
<td>
  <center><img src="logo10.png" width="375" height="375"></center>
</td>
<td>
 <div>
 <!-- 
    @reference http://codepen.io/Angelina_Lapteva/pen/zxmZMv
-->
      <form action="" id="login">
        <header>
          <h2><font color="white">Register New Employees</font></h2>
        </header>
        <div>
          <label class="labelStyle" id="logintitle1" for="loginField1".><font color="white">Login Email:</font></label>
          <div>
            <input id="loginInput" name="loginField1" type="text" value="" tabindex="1" placeholder="email address">
          </div>
        </div>
        <div>
          <label class="labelStyle" id="logintitle2" for="loginField2"><font color="white">Password:</font></label>
          <div>
            <input id="pwField" name="loginField2" type="password" value="" tabindex="2" placeholder="password">
          </div>
        </div>
        <br />
        <div>
        
          <input id="registerForm" name="registerForm" type="submit" value="Register" class="rosterclicks">
        </div>
      </form>
    </div>
</center>
</td>
</tr>
</table>
</center>
  </body>
</html>
