var menu = document.getElementById("menuGrid");

var backBtn = document.getElementById("backBtn");

var channel = document.getElementsByClassName("channel");

var menuBtn1 = document.getElementById("menuItem1");
var menuBtn2 = document.getElementById("menuItem2");
var menuBtn3 = document.getElementById("menuItem3");
var menuBtn4 = document.getElementById("menuItem4");
var menuBtn5 = document.getElementById("menuItem5");
var menuBtn6 = document.getElementById("menuItem6");

var channel1 = document.getElementById("channel-1");
var channel2 = document.getElementById("channel-2");
var channel3 = document.getElementById("channel-3");
var channel4 = document.getElementById("channel-4");
var channel5 = document.getElementById("channel-5");
var channel6 = document.getElementById("channel-6");

menuBtn4.onclick = function() {
  backBtn.style.display = "block";
  menu.style.display = "none";
  channel4.style.display = "block";
};

menuBtn5.onclick = function() {
  backBtn.style.display = "block";
  menu.style.display = "none";
  channel5.style.display = "block";
};

menuBtn6.onclick = function() {
  backBtn.style.display = "block";
  menu.style.display = "none";
  channel6.style.display = "block";
};

//Back button
backBtn.onclick = function() {
  backBtn.style.display = "none";
  menu.style.display = "grid";

  channel1.style.display = "none";
  channel2.style.display = "none";
  channel3.style.display = "none";
  channel4.style.display = "none";
  channel5.style.display = "none";
  channel6.style.display = "none";
};

//Channel-1 Color Match game
menuBtn1.onclick = function() {
  function randomNum() {
    return Math.round(Math.random() * 9 + 1);
  }

  function generateColor(number) {
    if (number < 4) {
      return "red";
    } else if (number < 7) {
      return "green";
    } else {
      return "blue";
    }
  }

  backBtn.style.display = "block";
  menu.style.display = "none";
  channel1.style.display = "grid";

  var answer = document.getElementById("colorDivAnswer");
  var color1 = document.getElementById("colorDiv1");
  var color2 = document.getElementById("colorDiv2");
  var color3 = document.getElementById("colorDiv3");

  answer.style.backgroundColor = generateColor(randomNum());
  color1.style.backgroundColor = generateColor(randomNum());
  color2.style.backgroundColor = generateColor(randomNum());
  color3.style.backgroundColor = generateColor(randomNum());

  color1.onclick = function() {
    if (color1.style.backgroundColor == "red") {
      color1.style.backgroundColor = "green";
    } else if (color1.style.backgroundColor == "green") {
      color1.style.backgroundColor = "blue";
    } else {
      color1.style.backgroundColor = "red";
    }
    if (
      color1.style.backgroundColor == color2.style.backgroundColor &&
      color2.style.backgroundColor == color3.style.backgroundColor &&
      color1.style.backgroundColor == answer.style.backgroundColor
    ) {
      answer.innerHTML = "YOU WIN";
    } else {
      answer.innerHTML = "ANSWER";
    }
  };

  color2.onclick = function() {
    if (color2.style.backgroundColor == "red") {
      color2.style.backgroundColor = "green";
    } else if (color2.style.backgroundColor == "green") {
      color2.style.backgroundColor = "blue";
    } else {
      color2.style.backgroundColor = "red";
    }
    if (
      color1.style.backgroundColor == color2.style.backgroundColor &&
      color2.style.backgroundColor == color3.style.backgroundColor &&
      color1.style.backgroundColor == answer.style.backgroundColor
    ) {
      answer.innerHTML = "YOU WIN";
    } else {
      answer.innerHTML = "ANSWER";
    }
  };

  color3.onclick = function() {
    if (color3.style.backgroundColor == "red") {
      color3.style.backgroundColor = "green";
    } else if (color3.style.backgroundColor == "green") {
      color3.style.backgroundColor = "blue";
    } else {
      color3.style.backgroundColor = "red";
    }
    if (
      color1.style.backgroundColor == color2.style.backgroundColor &&
      color2.style.backgroundColor == color3.style.backgroundColor &&
      color1.style.backgroundColor == answer.style.backgroundColor
    ) {
      answer.innerHTML = "YOU WIN";
    } else {
      answer.innerHTML = "ANSWER";
    }
  };
};

//Channel-2 Puzzle Slider Game
menuBtn2.onclick = function() {
  backBtn.style.display = "grid";
  menu.style.display = "none";
  channel2.style.display = "grid";

  //need to find the value of the pic in it's current position, not by it's order in the pic array,
  //because pic array order will always have the same order, and therefore the same value
  function populatePuzzle(pics, cells) {
    for (i = 0; i < pics.length; i++) {
      var rand = Math.floor(Math.random() * pics.length);
      if (!pics[rand].used) {
        pics[rand].id.style.gridArea = cells[i];
        pics[rand].used = true;
        pics[rand].position = i;
      } else {
        i--;
      }
    }
  }

  function isPuzzleSolvable(emptyBlock, puzzleValue) {
    if (emptyBlock.position > 2 && puzzleValue % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  function getPuzzleValue(sortedPics) {
    var puzzleValue = 0;
    for (i = 0; i < sortedPics.length; i++) {
      for (j = 0 + i; j < sortedPics.length; j++) {
        if (
          sortedPics[i].value > sortedPics[j].value &&
          sortedPics[j].value != 0
        ) {
          puzzleValue++;
        }
      }
    }
    return puzzleValue;
  }

  function sortPuzzlePics(pics, cellSize) {
    //takes an array of objects called pics, and number of cells in puzzle, then sorts them by displayed position
    //on board
    var sortedPics = [{}];
    for (i = 0; i < cellSize; i++) {
      for (j = 0; j < pics.length; j++) {
        if (pics[j].position == i) {
          sortedPics[i] = pics[j];
        }
      }
    }
    return sortedPics;
  }

  function findPicByName(pics, picName) {
    for (i = 0; i < pics.length; i++) {
      if (pics[i].name == picName) {
        return pics[i];
        break;
      }
    }
  }

  var pics = [
    { name: null, id: null, position: null, value: null, used: false }
  ];
  var cellsFilled = false;
  //Each element must be the grid area. Goes from top left to top right, then bot left to bot right
  var cells = [
    "1 / 1 / 2 / 2",
    "1 / 2 / 2 / 3",
    "1 / 3 / 2 / 4",
    "2 / 1 / 3 / 2",
    "2 / 2 / 3 / 3",
    "2 / 3 / 3 / 4"
  ];

  //This loop fills in the pics array with objects for: name, id, position, value, and used boolean
  for (i = 0; i < 6; i++) {
    var picName = "dndPuzzlePic" + (i + 1);
    var id = document.getElementById(picName);
    pics[i] = {
      name: "pic" + (i + 1),
      id: id,
      position: i + 1,
      value: i,
      used: false
    };
  }
  var emptyBlock = findPicByName(pics, "pic1");

  //randomly assign images to cells
  populatePuzzle(pics, cells);

  while (!cellsFilled) {
    var sortedPics = sortPuzzlePics(pics, cells.length);
    var puzzleValue = getPuzzleValue(sortedPics);
    if (!isPuzzleSolvable(emptyBlock, puzzleValue)) {
      for (i = 0; i < cells.length; i++) {
        pics[i].used = false;
      }
      populatePuzzle(pics, cells);
    } else {
      cellsFilled = true;
    }
  }
};

//This method is used to swap around images in channel-2 sliding puzzle game
function swap(e) {
  var pic1 = document.getElementById("dndPuzzlePic1");

  var cells = [
    "1 / 1 / 2 / 2",
    "1 / 2 / 2 / 3",
    "1 / 3 / 2 / 4",
    "2 / 1 / 3 / 2",
    "2 / 2 / 3 / 3",
    "2 / 3 / 3 / 4"
  ];

  for (i = 0; i < 6; i++) {
    if (cells[i] == e.style.gridArea) {
      if (
        cells[i + 1] == pic1.style.gridArea &&
        i != 2 &&
        i != 5 &&
        i + 1 != 6
      ) {
        e.style.gridArea = cells[i + 1];
        pic1.style.gridArea = cells[i];
        i++; //skip next iteration to avoid swapping back to origianl positions
      } else if (cells[i - 1] == pic1.style.gridArea && i != 0 && i != 3) {
        e.style.gridArea = cells[i - 1];
        pic1.style.gridArea = cells[i];
      } else if (cells[i + 3] == pic1.style.gridArea && i < 3) {
        e.style.gridArea = cells[i + 3];
        pic1.style.gridArea = cells[i];
        break; //avoid swapping again
      } else if (cells[i - 3] == pic1.style.gridArea && i > 2) {
        e.style.gridArea = cells[i - 3];
        pic1.style.gridArea = cells[i];
      }
    }
  }
}

//Channel-3 Tic Tac Toe
menuBtn3.onclick = function() {
  backBtn.style.display = "block";
  menu.style.display = "none";
  channel3.style.display = "grid";
};

var xTurn = true;
var boxes = [{ boxId: null, empty: false }];

//fills boxes array with tic tac toe boxes
function getBoxes() {
  for (i = 0; i < 9; i++) {
    var boxName = "ticTacToeBox" + (i + 1);
    var box = document.getElementById(boxName);
    boxes[i] = {
      boxId: box.id
    };
  }
}

getBoxes();
function ticTacToeChangeTile(id) {
  for (i = 0; i < boxes.length; i++) {
    if (boxes[i].boxId == id) {
      if (!boxes[i].used && xTurn) {
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).style.fontSize = "50px";
        xTurn = false;
        boxes[i].used = true;
      } else if (!boxes[i].used) {
        document.getElementById(id).innerHTML = "O";
        document.getElementById(id).style.fontSize = "50px";
        xTurn = true;
        boxes[i].used = true;
      }
    }
  }
}
