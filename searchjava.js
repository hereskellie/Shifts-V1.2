var fb = new Firebase('https://shiftsapp.firebaseio.com/');

function loadRecord(email) {
  fb.child('index/' + escapeEmail(email)).once('value', function(snap) {
    if (snap.val() === null) {
      show(snap);
    } else {
      fb.child('user/' + snap.val()).once('value', show);
    }
  });
}

function show(snap) {
  var obj = snap.val();
  $('pre').text(obj ? JSON.stringify(obj, null, 2) : 'not found');
}

function listEmails() {
  var $p = $('p');
  fb.child('index').once('value', function(snap) {
    console.log('fetched ', snap.val());
    var emails = snap.val() || {};
    for (k in emails) {
      var email = unescapeEmail(k);
      $p.append($('<a href="#' + email + '"></a>').text(email));
    }
  });
}

function escapeEmail(email) {
  return (email || '').replace('.', ',');
}

function unescapeEmail(email) {
  return (email || '').replace(',', '.');
}

$('button').on('click', function() {
  var email = $('input').val();
  if (email) {
    loadRecord(email);
  } else {
    $('pre').text('not found');
  }
});

$('p').on('click', 'a', function(e) {
  e.preventDefault();
  var email = unescapeEmail($(this).text());
  $('input').val(email);
  $('button').click();
});

$('form').on('submit', function(e) {
  e.preventDefault();
  return false;
});

listEmails();

function loadRecord2(emp1) {
  fb.child('index/' + escapeDate(emp1)).once('value', function(snap2) {
    if (snap2.val() === null) {
      show(snap2);
    } else {
      fb.child('roster/' + snap2.val()).once('value', show);
    }
  });
}

function show(snap2) {
  var obj2 = snap2.val();
  $('pre').text(obj2 ? JSON.stringify(obj2, null, 2) : 'not found');
}

function listDays() {
  var $f = $('f');
  fb.child('index').once('value', function(snap2) {
    console.log('fetched ', snap2.val());
    var emp1s = snap2.val() || {};
    for (k in dates) {
      var emp1 = unescapeEmail(k);
      $f.append($('<a href="#' + emp1 + '"></a>').text(emp1));
    }
  });
}

function escapeDate(emp1) {
  return (emp1);
}

function unescapeDate(emp1) {
  return (emp1);
}

$('button').on('click', function() {
  var emp1 = $('input').val();
  if (emp1) {
    loadRecord2(emp1);
  } else {
    $('pre').text('not found');
  }
});


$('form').on('submit', function(e) {
  e.preventDefault();
  return false;
});
