<!--

* index.php

* Starting interface - connected to userauth.js

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
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link href="favicon.ico" rel="icon">

    <!-- Scripts -->
    <script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="ie-emulation-modes-warning.js"></script>
    <script type="text/javascript" src="userauth.js"></script>

    <title>Shifts</title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">
    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">
    
    
    
</head>
<body background="dark.jpg">
   
    <br>
    <br>
    <br>
    <br>
    <br>
    <center>
        <table border="0" cellpadding="20px">
            <tr>
                <td>
                    <center>
                        <img height="375" src="logo10.png" width="375">
                    </center>
                </td>
                <td>
                   <div>

<!-- 
    @reference http://codepen.io/Angelina_Lapteva/pen/zxmZMv
-->
      <form action="" id="finallogin">
        <header>
          <h2><font color="white">Shifts Rostering System</font></h2>
        </header>
        <div>
          <label class="labelStyle" id="logintitle1" for="loginField1"><font color="white">Login Email:</font></label>
          <div>
            <input id="finalloginInput" name="loginField1" type="text" value="" tabindex="1" placeholder="enter email address">
          </div>
        </div>
        <div>
          <label class="labelStyle" id="logintitle2" for="loginField2"><font color="white">Password:</font></label>
          <div>
            <input id="finalpwField" name="loginField2" type="password" value="" tabindex="2" placeholder="enter password">
          </div>
        </div>
        <br />
        <div>
        
          <input id="finalloginForm" name="registerForm" type="submit" value="Login" class="rosterclicks">
        </div>
      </form>
    </div>

                  
                </td>
            </tr>
        </table>
    </center>

</body>
</html>
