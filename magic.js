var colarray = genrandomcols (6);
var blocks = document.querySelectorAll ('.d1');
var pick = pickcolor ();

var coldis = document.getElementById ('coldis');
coldis.textContent = pick;
var massege = document.querySelector ('#massege');
var navs = document.querySelector ('.navs');
var resetbuton = document.querySelector ('#butn');
var reset = document.querySelector ('#reset');
resetbuton.addEventListener ('click', function () {
  colarray = genrandomcols (6);
  pick = pickcolor ();
  coldis.textContent = pick;
  for (var i = 0; i < colarray.length; i++) {
    blocks[i].style.backgroundColor = colarray[i];
  }
  navs.style.backgroundColor = 'rgb(59, 59, 117)';
  reset.textContent = 'NEW COLORS';
  massege.textContent = '';
});

var easybutn1 = document.querySelector ('#butn1');
var hardbutn2 = document.querySelector ('#butn2');
easybutn1.addEventListener ('click', function () {
  hardbutn2.style.backgroundColor = 'pink';
  easybutn1.style.backgroundColor = 'green';
  colarray = genrandomcols (3);
  pick = pickcolor ();
  coldis.textContent = pick;
  for (var i = 0; i < colarray.length; i++) {
    blocks[i].style.backgroundColor = colarray[i];
  }
  colarray = genrandomcols (6);
  for (var i = 3; i < colarray.length; i++) {
    blocks[i].style.display = 'none';
  }
  massege.textContent = '';
  reset.textContent = 'NEW COLORS';
  resetbuton.addEventListener ('click', function () {
    colarray = genrandomcols (3);
    pick = pickcolor ();
    coldis.textContent = pick;
    for (var i = 0; i < colarray.length; i++) {
      blocks[i].style.backgroundColor = colarray[i];
    }
    navs.style.backgroundColor = 'rgb(59, 59, 117)';
    reset.textContent = 'NEW COLORS';
    massege.textContent = '';
  });
});

hardbutn2.addEventListener ('click', function () {
  hardbutn2.style.backgroundColor = 'green';
  easybutn1.style.backgroundColor = 'pink';
  colarray = genrandomcols (6);
  pick = pickcolor ();
  coldis.textContent = pick;
  for (var i = 3; i < colarray.length; i++) {
    blocks[i].style.display = 'block';
  }
  for (var i = 0; i < colarray.length; i++) {
    blocks[i].style.backgroundColor = colarray[i];
  }
  navs.style.backgroundColor = 'rgb(59, 59, 117)';
  massege.textContent = '';
  reset.textContent = 'NEW COLORS';
  resetbuton.addEventListener ('click', function () {
    colarray = genrandomcols (6);
    pick = pickcolor ();
    coldis.textContent = pick;
    for (var i = 0; i < colarray.length; i++) {
      blocks[i].style.backgroundColor = colarray[i];
    }
    navs.style.backgroundColor = 'rgb(59, 59, 117)';
    reset.textContent = 'NEW COLORS';
    massege.textContent = '';
  });
});

for (var i = 0; i < colarray.length; i++) {
  blocks[i].style.backgroundColor = colarray[i];
  blocks[i].addEventListener ('click', function () {
    var clickcol = this.style.backgroundColor;

    if (clickcol === pick) {
      navs.style.backgroundColor = clickcol;
      navs.style.color = 'white';
      massege.textContent = 'correct';
      change (clickcol);
      reset.textContent = 'play again';
    } else {
      this.style.backgroundColor = 'black';
      massege.textContent = 'try again';
    }
  });
}

function change (color) {
  for (var i = 0; i < colarray.length; i++) {
    blocks[i].style.backgroundColor = color;
  }
}
function pickcolor () {
  var random = Math.floor (Math.random () * colarray.length);
  return colarray[random];
}
function genrandomcols (num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push (randomcolors ());
  }
  return arr;
}
function randomcolors () {
  var r = Math.floor (Math.random () * 256);
  var g = Math.floor (Math.random () * 256);
  var b = Math.floor (Math.random () * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
