//FUNCTIONS TO OUTPUT THE EMPLOYEES

$(function Emp1(){

// Get a database reference to our posts
var employeeref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp1");

// Attach an asynchronous callback to read the data at our posts reference
employeeref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

 $(function Emp2(){

// Get a database reference to our posts
var employee2ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp2");

// Attach an asynchronous callback to read the data at our posts reference
employee2ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

  $(function Emp3(){

// Get a database reference to our posts
var employee3ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp3");

// Attach an asynchronous callback to read the data at our posts reference
employee3ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp3').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

   $(function Emp4(){

// Get a database reference to our posts
var employee4ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp4");

// Attach an asynchronous callback to read the data at our posts reference
employee4ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp4').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

   $(function Emp5(){

// Get a database reference to our posts
var employee5ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp5");

// Attach an asynchronous callback to read the data at our posts reference
employee5ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp5').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

 //ROSTERS SAVING 
 //ROSTERS FOR MONDAYS
 $(function Monday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateMondayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date1Field = $('#date1Input');
  var emp1put1Field = $('#emp1Input1');
  var emp2put1Field = $('#emp2Input1');
  var emp3put1Field = $('#emp3Input1');
  var emp4put1Field = $('#emp4Input1');
  var emp5put1Field = $('#emp5Input1');
  var enter1Field = $('#enter1');

  // LISTEN FOR KEYPRESS EVENT
  enter1Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateMonday = date1Field.val();
      var emp1put1 = emp1put1Field.val();
      var emp2put1 = emp2put1Field.val();
      var emp3put1 = emp3put1Field.val();
      var emp4put1 = emp4put1Field.val();
      var emp5put1 = emp5put1Field.val();
      var enter1 = enter1Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj1 = {};
    obj1[dateMonday] = {
      emp1:emp1put1, 
      emp2:emp2put1, 
      emp3:emp3put1, 
      emp4:emp4put1, 
      emp5:emp5put1
    }

    dateMondayRef.child(dateMonday).update({
      emp1:emp1put1, 
      emp2:emp2put1, 
      emp3:emp3put1, 
      emp4:emp4put1, 
      emp5:emp5put1});
    enter1Field.val('');
      }
    });

});




//REFERENCE FOR TUESDAY
$(function Tuesday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateTuesdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date2Field = $('#date2Input');
  var emp1put2Field = $('#emp1Input2');
  var emp2put2Field = $('#emp2Input2');
  var emp3put2Field = $('#emp3Input2');
  var emp4put2Field = $('#emp4Input2');
  var emp5put2Field = $('#emp5Input2');
  var enter2Field = $('#enter2');

  // LISTEN FOR KEYPRESS EVENT
  enter2Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateTuesday = date2Field.val();
      var emp1put2 = emp1put2Field.val();
      var emp2put2 = emp2put2Field.val();
      var emp3put2 = emp3put2Field.val();
      var emp4put2 = emp4put2Field.val();
      var emp5put2 = emp5put2Field.val();
      var enter2 = enter2Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj2 = {};
    obj2[dateTuesday] = {
      emp1:emp1put2, 
      emp2:emp2put2,
      emp3:emp3put2, 
      emp4:emp4put2, 
      emp5:emp5put2
    }

    dateTuesdayRef.child(dateTuesday).update({emp1:emp1put2, 
      emp2:emp2put2, 
      emp3:emp3put2, 
      emp4:emp4put2, 
      emp5:emp5put2});
    enter2Field.val('');
      }
    });

});

//REFERENCE FOR WEDNESDAY
$(function Wednesday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateWednesdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date3Field = $('#date3Input');
  var emp1put3Field = $('#emp1Input3');
  var emp2put3Field = $('#emp2Input3');
  var emp3put3Field = $('#emp3Input3');
  var emp4put3Field = $('#emp4Input3');
  var emp5put3Field = $('#emp5Input3');
  var enter3Field = $('#enter3');

  // LISTEN FOR KEYPRESS EVENT
  enter3Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateWednesday = date3Field.val();
      var emp1put3 = emp1put3Field.val();
      var emp2put3 = emp2put3Field.val();
      var emp3put3 = emp3put3Field.val();
      var emp4put3 = emp4put3Field.val();
      var emp5put3 = emp5put3Field.val();
      var enter3 = enter3Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj3 = {};
    obj3[dateWednesday] = {
      emp1:emp1put3, 
      emp2:emp2put3,
      emp3:emp3put3, 
      emp4:emp4put3, 
      emp5:emp5put3
    }

    dateWednesdayRef.child(dateWednesday).update({emp1:emp1put3, 
      emp2:emp2put3, 
      emp3:emp3put3, 
      emp4:emp4put3, 
      emp5:emp5put3});
    enter3Field.val('');
      }
    });

});

//REFERENCE TO THURSDAY
$(function Thurday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateThursdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date4Field = $('#date4Input');
  var emp1put4Field = $('#emp1Input4');
  var emp2put4Field = $('#emp2Input4');
  var emp3put4Field = $('#emp3Input4');
  var emp4put4Field = $('#emp4Input4');
  var emp5put4Field = $('#emp5Input4');
  var enter4Field = $('#enter4');

  // LISTEN FOR KEYPRESS EVENT
  enter4Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateThursday = date4Field.val();
      var emp1put4 = emp1put4Field.val();
      var emp2put4 = emp2put4Field.val();
      var emp3put4 = emp3put4Field.val();
      var emp4put4 = emp4put4Field.val();
      var emp5put4 = emp5put4Field.val();
      var enter4 = enter4Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj4 = {};
    obj4[dateThursday] = {
      emp1:emp1put4, 
      emp2:emp2put4,
      emp3:emp3put4, 
      emp4:emp4put4, 
      emp5:emp5put4
    }

    dateThursdayRef.child(dateThursday).update({
    emp1:emp1put4, 
      emp2:emp2put4, 
      emp3:emp3put4, 
      emp4:emp4put4, 
      emp5:emp5put4});
    enter4Field.val('');
      }
    });

});

//REFERENCE FOR FRIDAY
$(function Friday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateFridayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date5Field = $('#date5Input');
  var emp1put5Field = $('#emp1Input5');
  var emp2put5Field = $('#emp2Input5');
  var emp3put5Field = $('#emp3Input5');
  var emp4put5Field = $('#emp4Input5');
  var emp5put5Field = $('#emp5Input5');
  var enter5Field = $('#enter5');

  // LISTEN FOR KEYPRESS EVENT
  enter5Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateFriday = date5Field.val();
      var emp1put5 = emp1put5Field.val();
      var emp2put5 = emp2put5Field.val();
      var emp3put5 = emp3put5Field.val();
      var emp4put5 = emp4put5Field.val();
      var emp5put5 = emp5put5Field.val();
      var enter5 = enter5Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj5 = {};
    obj5[dateFriday] = {
      emp1:emp1put5, 
      emp2:emp2put5,
      emp3:emp3put5, 
      emp4:emp4put5, 
      emp5:emp5put5
    }

    dateFridayRef.child(dateFriday).update({
    emp1:emp1put5, 
      emp2:emp2put5, 
      emp3:emp3put5, 
      emp4:emp4put5, 
      emp5:emp5put5});
    enter5Field.val('');
      }
    });

});

//REFERENCE FOR SATURDAY
$(function Saturday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateSaturdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date6Field = $('#date6Input');
  var emp1put6Field = $('#emp1Input6');
  var emp2put6Field = $('#emp2Input6');
  var emp3put6Field = $('#emp3Input6');
  var emp4put6Field = $('#emp4Input6');
  var emp5put6Field = $('#emp5Input6');
  var enter6Field = $('#enter6');

  // LISTEN FOR KEYPRESS EVENT
  enter6Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateSaturday = date6Field.val();
      var emp1put6 = emp1put6Field.val();
      var emp2put6 = emp2put6Field.val();
      var emp3put6 = emp3put6Field.val();
      var emp4put6 = emp4put6Field.val();
      var emp5put6 = emp5put6Field.val();
      var enter6 = enter6Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj6 = {};
    obj6[dateSaturday] = {
      emp1:emp1put6, 
      emp2:emp2put6,
      emp3:emp3put6, 
      emp4:emp4put6, 
      emp5:emp5put6
    }

    dateSaturdayRef.child(dateSaturday).update({
    emp1:emp1put6, 
      emp2:emp2put6, 
      emp3:emp3put6, 
      emp4:emp4put6, 
      emp5:emp5put6});
    enter6Field.val('');
      }
    });

});

//REFERENCE FOR SUNDAY
$(function Sunday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateSundayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date7Field = $('#date7Input');
  var emp1put7Field = $('#emp1Input7');
  var emp2put7Field = $('#emp2Input7');
  var emp3put7Field = $('#emp3Input7');
  var emp4put7Field = $('#emp4Input7');
  var emp5put7Field = $('#emp5Input7');
  var enter7Field = $('#enter7');

  // LISTEN FOR KEYPRESS EVENT
  enter7Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateSunday = date7Field.val();
      var emp1put7 = emp1put7Field.val();
      var emp2put7 = emp2put7Field.val();
      var emp3put7 = emp3put7Field.val();
      var emp4put7 = emp4put7Field.val();
      var emp5put7 = emp5put7Field.val();
      var enter7 = enter7Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
    var obj7 = {};
    obj7[dateSunday] = {
      emp1:emp1put7, 
      emp2:emp2put7,
      emp3:emp3put7, 
      emp4:emp4put7, 
      emp5:emp5put7
    }

    dateSundayRef.child(dateSunday).update({
    emp1:emp1put7, 
      emp2:emp2put7, 
      emp3:emp3put7, 
      emp4:emp4put7, 
      emp5:emp5put7});
    enter7Field.val('');
      }
    });

});

var rosterdate = new Date();
var numDays = 7;

$(window.employees = function (){
  var empurl = "https://shiftsapp.firebaseio.com/employees/";
  
  var person1;
  var datapull = new Firebase(empurl);
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  person1 = snapshot.val();
  console.log(person1);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  var person2;
  var datapull = new Firebase(empurl);
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  person2 = snapshot.val();
  console.log(person2);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  displayEmployees(person1, "person1");
  displayEmployees(person2, "person2");


});

$(window.displayEmployees = function (arrayEmp, empCode){
  var arrayEmp = arguments[0];
  var empCode = arguments[1];
  if(arrayEmp != null)
  {
    console.log("arrayEmp");
    console.log(arrayEmp.emp1);
    id1 = '#emp1'.concat(empCode);
    $(id1).html(arrayEmp.emp1);

    console.log(arrayEmp.emp2);
    id2 = '#emp2'.concat(empCode);
    $(id2).html(arrayEmp.emp2);

    console.log(arrayEmp.emp3);
    id3 = '#emp3'.concat(empCode);
    $(id3).html(arrayEmp.emp3);

    console.log(arrayEmp.emp4);
    id4 = '#emp5'.concat(empCode);
    $(id4).html(arrayEmp.emp4);

    console.log(arrayEmp.emp5);
    id5 = '#emp5'.concat(empCode);
    $(id5).html(arrayEmp.emp5);
  }
  else
  {
    var nodata = " "
    console.log("arrayEmp");
    console.log(nodata);
    id1 = '#emp1'.concat(empCode);
    $(id1).html(nodata);

    console.log(nodata);
    id2 = '#emp2'.concat(empCode);
    $(id2).html(nodata);

    console.log(nodata);
    id3 = '#emp3'.concat(empCode);
    $(id3).html(nodata);

    console.log(nodata);
    id4 = '#emp4'.concat(empCode);
    $(id4).html(nodata);

    console.log(nodata);
    id5 = '#emp5'.concat(empCode);
    $(id5).html(nodata);
    console.log(id1, id2, id3, id4, id5);
  }

});

$(window.setCurrentDate = function (){
  rosterdate = new Date();
});

$(window.retrieveNextRoster = function (){
  rosterdate.setDate(rosterdate.getDate() + numDays);
  retrieveRoster();
});

$(window.retrievePreviousRoster = function (){
  rosterdate.setDate(rosterdate.getDate() - numDays);
  retrieveRoster();
});


$(window.displayRoster = function (arrayRoster, dayCode){
  var arrayRoster = arguments[0];
  var dayCode = arguments[1];
  if(arrayRoster != null)
  {
    console.log("arrayRoster");
    console.log(arrayRoster.emp1);
    id1 = '#emp1'.concat(dayCode);
    $(id1).html(arrayRoster.emp1);

    console.log(arrayRoster.emp2);
    id2 = '#emp2'.concat(dayCode);
    $(id2).html(arrayRoster.emp2);

    console.log(arrayRoster.emp3);
    id3 = '#emp3'.concat(dayCode);
    $(id3).html(arrayRoster.emp3);

    console.log(arrayRoster.emp4);
    id4 = '#emp4'.concat(dayCode);
    $(id4).html(arrayRoster.emp4);

    console.log(arrayRoster.emp5);
    id5 = '#emp5'.concat(dayCode);
    $(id5).html(arrayRoster.emp5);
  }
  else
  {
    var nodata = " "
    console.log("arrayRoster");
    console.log(nodata);
    id1 = '#emp1'.concat(dayCode);
    $(id1).html(nodata);

    console.log(nodata);
    id2 = '#emp2'.concat(dayCode);
    $(id2).html(nodata);

  
    id3 = '#emp3'.concat(dayCode);
    $(id3).html(nodata);

    id4 = '#emp4'.concat(dayCode);
    $(id4).html(nodata);

    id5 = '#emp5'.concat(dayCode);
    $(id5).html(nodata);
    console.log(id1, id2, id3, id4, id5);
  }

});

$(window.retrieveRoster = function (){
  var url = "https://shiftsapp.firebaseio.com/roster/";
  
  rosdate = computeDate(0);
  var day1;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  day1 = snapshot.val();
  console.log(day1);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  rosdate = computeDate(1);
  var day2;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  day2 = snapshot.val();
  console.log(day2);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  rosdate = computeDate(2);
  var day3;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  day3 = snapshot.val();
  console.log(day3);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  rosdate = computeDate(3);
  var day4;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  day4 = snapshot.val();
  console.log(day4);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  rosdate = computeDate(4);
  var day5;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  day5 = snapshot.val();
  console.log(day5);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  rosdate = computeDate(5);
  var day6;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  day6 = snapshot.val();
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  rosdate = computeDate(6);
  var day7;
  var datapull = new Firebase(url.concat(rosdate));
  datapull.on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(datapull);
  day7 = snapshot.val();
  console.log(day7);
  $('#datapull').html(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });
 
  displayRoster(day1, "day1");
  displayRoster(day2, "day2");
  displayRoster(day3, "day3");
  displayRoster(day4, "day4");
  displayRoster(day5, "day5");
  displayRoster(day6, "day6");
  displayRoster(day7, "day7");



});

$(window.computeEmp = function (numberOfEmp){
  
  var numberOfEmp = arguments[0];


  //console.log(d);
  rdate = d.toISOString();
  var i = rdate.indexOf("T");
  rdate = rdate.substring(0, i);
  id = "#emp".concat(numberOf);
  $(id).html(rdate);
  //console.log(d);
  //console.log(rdate);
  return rdate;

});



$(window.computeDate = function (numberOfDays){
  //console.log("Helo World");
  var d = new Date(rosterdate.getFullYear(), rosterdate.getMonth(), rosterdate.getDate(), rosterdate.getHours(), rosterdate.getMinutes(), rosterdate.getSeconds(), rosterdate.getMilliseconds());
  //console.log(rosterdate.getDate());
  //console.log(rosterdate);
  //console.log(d);
  //console.log(numberOfDays);
  var numberOfDays = arguments[0]; 
  d.setDate(d.getDate() + numberOfDays);

  //console.log(d);
  rdate = d.toISOString();
  var i = rdate.indexOf("T");
  rdate = rdate.substring(0, i);
  id = "#date".concat(numberOfDays);
  $(id).html(rdate);
  //console.log(d);
  //console.log(rdate);
  return rdate;

});



(function Testing(){
  return 'Testing Is Working'
});